<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modelIntervenants extends Model
{
    use HasFactory;
    protected $table = "intervenants";
    protected $fillable = [
        'id',
        'users_id',
        'etablissements_id',
        'matricule',
        'datenaissance',
        'intitule_diplome',
        'type_diplome',
        'specialite_diplome',
        'type_intervenant',
        'status',
    ];
}
