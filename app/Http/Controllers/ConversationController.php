<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ConversationController extends Controller
{
    public function chatUsers(){
        
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = Auth::user()->id;
        $convo = Conversation::with('sender','receiver')->where('is_archived', 0)->where(function ($q) use ($userId) {
            $q->orWhere('from', $userId);
            $q->orWhere('to', $userId);
        })->get();
        foreach($convo as $c){
            $lastMsg = $c->messages()->latest()->first();
            $c['last_message'] = !empty($lastMsg) ? $lastMsg->body : '';
        }
        return response()->json($convo, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $exists = Conversation::between(Auth::user()->id,$request->user_id)->first();
        if($exists){
            return response()->json($exists, 200);
        } else{
            $newConvo = Conversation::create([
                'from' => Auth::user()->id,
                'to' => $request->user_id,
            ]);
            return response()->json($newConvo, 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getMessages($id)
    {
        $convo = Conversation::find($id);
        $messages = $convo->messages()->orderBy('created_at','desc')->paginate('500');
        return response()->json($messages, 200);
    }

    public function sendMessage($id)
    {
        $convo = Conversation::find($id);
        $msg = $convo->messages()->create([
            'from' => Auth::user()->id,
            'body' => request()->message,
        ]);
        return response()->json($msg, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
