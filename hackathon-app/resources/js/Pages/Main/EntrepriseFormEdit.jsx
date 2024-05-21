import React , {useState,useEffect} from 'react'
import { useForm,usePage } from '@inertiajs/react'

export default function EntrepriseFormEdit() {
    const { id } = usePage().props;

    const { data, setData, post, errors} = useForm({
        id: id,
        nom: '',
        etablisement: '',
        matricule: '',
        intitulediplome: '',
        typediplome :'',
        datenaissance: '',
        specialitediplome :'',
        statut:'',
        email:'',
        motdepasse:'',
    })
    const { etablisements } = usePage().props;
    const { dataedit } = usePage().props;
    const { user } = usePage().props;

    const saveData = (e) =>{
        e.preventDefault();
        post('/update-formulaire-entreprise' , {
          preserveScroll: true,
          onSuccess: () => {
           null
          }
        })
      }

  return (
    <div>
      <form className="w-full sm:w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2 pb-4" onSubmit={(e)=>{saveData(e)}} >
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="nom " className="block text-sm font-medium text-gray-700 dark:text-slate-50">Nom :</label>
              <input type="text" id="nom" name="matricule" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, nom: e.target.value })}
                value={user.name}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="etablisement" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Etablisement :</label>
              <select id="etablisement" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                  required  
                  maxLength={15}
                  pattern="[a-zA-Z0-9]{1,15}"
                  onChange={(e) => setData({ ...data, etablisement: e.target.value })}
                  value={dataedit.establisement}>
                    {etablisements.map((element) => (
                      <option key={element.id} value={element.id}>{element.nom_efp}</option>
                    ))}
                </select>
                
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="matricule " className="block text-sm font-medium text-gray-700 dark:text-slate-50">Matricule :</label>
              <input type="text" id="matricule" name="matricule" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, matricule: e.target.value })}
                value={dataedit.matricule}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Date de naissance :</label>
              <input type="date" id="name" name="name" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, datenaissance : e.target.value })}
                value={dataedit.datenaissance}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Intitule diplome :</label>
              <input type="text" id="name" name="name" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, intitulediplome: e.target.value })}
                value={dataedit.intitule_diplome}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="typediplome" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Type diplome :</label>
              <input type="text" id="typediplome" name="typediplome" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, typediplome: e.target.value })}
                value={dataedit.type_diplome}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Specialite diplome :</label>
              <input type="text" id="specialitediplome" name="specialitediplome" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, specialitediplome: e.target.value })}
                value={dataedit.specialite_diplome}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Status :</label>
              <input type="text" id="status" name="status" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, statut: e.target.value })}
                value={dataedit.status}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Email :</label>
              <input type="email" id="email" name="email" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                onChange={(e) => setData({ ...data, email: e.target.value })}
                value={user.email}
                />
            </div>
            <div className="sm:col-span-1 md:col-span-1">
              <label htmlFor="motdepasse" className="block text-sm font-medium text-gray-700 dark:text-slate-50">Mot de passe :</label>
              <input type="password" id="motdepasse" name="motdepasse" className={"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                required
                maxLength={15}
                pattern="[a-zA-Z]{1,15}"
                onChange={(e) => setData({ ...data, motdepasse: e.target.value })}
                value={dataedit.motdepasse}
                />
            </div>
                <div className="sm:col-span-1 md:col-span-1">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Modifier</button>
                </div>
            </form>
    </div>
  )
}
