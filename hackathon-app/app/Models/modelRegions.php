<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modelRegions extends Model
{
    use HasFactory;
    protected $table = "regions";
    protected $fillable = [
        'id',
        'nom_region',
    ];
}
