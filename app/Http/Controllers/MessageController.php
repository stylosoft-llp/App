<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageCreated;
use App\Models\Conversation;
use Illuminate\Support\Facades\DB;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $userId = Auth::user()->id;
        $userName = Auth::user()->name;
        $message = Message::create([
            'user_id' => $userId,
            'message' => $request->message,
            'user_name' => $userName,
            'project_id' => $id
        ]);
        event(new MessageCreated($message));
        return response()->json($message, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $msgs = Message::where('conversation_id',$id)->where(function($q){
            $q->orWhere('from',$id);
            $q->orWhere('to',$id);
        })->get();
        Conversation::find($id)->update('is_read',1);
        return response()->json($msgs, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
