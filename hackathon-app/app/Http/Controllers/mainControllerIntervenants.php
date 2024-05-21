<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\models\modelIntervenants;

use App\models\User;

use App\models\modelEtablissement;

use App\models\modelRegions;

use Inertia\Inertia;

use Illuminate\Support\Facades\Hash;

class mainControllerIntervenants extends Controller
{
    public function addIntervenants(){
        $etablisements = modelEtablissement::select('*')->get();
        return Inertia::render('Main/EntrepriseForm', [
            'etablisements' => $etablisements,
        ]);
    }
    public function createIntervenants(Request $request){
        $data = [
            'nom' => $request->input('nom'),
            'etablissements_id' => $request->input('etablisement'),
            'matricule' => $request->input('matricule'),
            'intitule_diplome' => $request->input('intitulediplome'),
            'type_diplome' => $request->input('typediplome'),
            'datenaissance' => $request->input('datenaissance'),
            'specialite_diplome' => $request->input('specialitediplome'),
            'status' => $request->input('statut'),
        ];
        $dataUser = [
            'name' => $request->input('nom'),
            'roles_id' => 4,
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('motdepasse')),
        ];
        if(User::create($dataUser)){
            $userId = User::orderBy('id', 'DESC')->pluck('id')->first();
            $data['users_id'] = $userId;
            modelIntervenants::create($data);
        }
        return Inertia::render('/main-formulaire-entreprise');
    }
    public function editIntervenants($id){
        $data = modelIntervenants::select('*')->where('id',$id)->first();
        $userId = modelIntervenants::select('users_id')->where('id',$id)->first();
        $user= User::select('*')->where('id',$id)->first();
        $etablisements = modelEtablissement::select('*')->get();
        return Inertia::render('Main/EntrepriseFormEdit', [
            'etablisements' => $etablisements,
            'dataedit' => $data,
            'user' => $user,
            'id' => $id,
        ]);
        return Inertia::render('/main-formulaire-entreprise');
    }
    public function updateIntervenants(Request $request,$id){
        $userId = modelIntervenants::select('users_id')->where('id',$id)->first();
        $data = [
            'nom' => $request->input('nom'),
            'etablissements_id' => $request->input('etablisement'),
            'matricule' => $request->input('matricule'),
            'intitule_diplome' => $request->input('intitulediplome'),
            'type_diplome' => $request->input('typediplome'),
            'datenaissance' => $request->input('datenaissance'),
            'specialite_diplome' => $request->input('specialitediplome'),
            'status' => $request->input('statut'),
        ];
        $dataUser = [
            'name' => $request->input('nom'),
            'roles_id' => 4,
            'email' => $request->input('email'),
        ];
        if($request->input('password')){
            $dataUser['password'] = Hash::make($request->input('password'));
        }
        if(User::where('id',$idUser)->update($dataUser)){
            modelIntervenants::where('id',$id)->update($data);
        }
        return Inertia::render('/main-formulaire-entreprise');
    }
}
