<?php

namespace Database\Seeders;

use App\Models\FormTemplate;
use Illuminate\Database\Seeder;

class FormTemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $formTemplate = new FormTemplate();
        $formTemplate['product_id']=1;
        $formTemplate['data']='[{"title":"heading","value":"heading","size":"lg"},{"title":"text","value":"This is random text","size":"lg"},{"title":"textbox","size":"md","name":"textboxx"},{"title":"checkbox","value":true,"size":"md","name":"checkboxx"},{"title":"textarea","size":"lg","name":"textarearea"},{"title":"table","value":{"hdata":["aasonoi","oinob"],"bdata":["inoa","ionsb"]},"size":"lg"}]';
        $formTemplate['type']='installation';
        $formTemplate->save();
    }
}
