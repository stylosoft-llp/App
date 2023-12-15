<?php

namespace App\Exports;

use App\Models\Courier;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CourierExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Courier::all();
    }

    public function headings(): array
    {
        $couriers = Courier::all();
        $courier = $couriers->first();
        $attributes = array_keys($courier->toArray());
        return $attributes;
    }
}
