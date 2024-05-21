<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modelEtablissement extends Model
{
    use HasFactory;
    protected $table = "etablissements";
    protected $fillable = [
        'id',
        'nom',
        'users_id',
        'regions_id',
        'nom_efp',
        'adresse',
        'tel',
        'ville',
        'status',
    ];
}

