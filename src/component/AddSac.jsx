import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2'

export default function AddSac({onAddSac}) {

    const [newsac,setNewsac]=useState({
        nom:"",    
        prix:"",
        image:""
    })
    const handleAddSac=()=>{

        if (newsac.nom.trim() === '' || newsac.image.trim() === '' || newsac.prix.trim() === '') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Please fill in all fields!',
            });
            return;
          }

        onAddSac(newsac)
        setNewsac({
            nom:"",
            prix:"",
            image:""
        })

        Swal.fire({
            icon: 'success',
            title: 'Sac Added!',
            showConfirmButton: false,
            timer: 1500, // Automatically close after 1.5 seconds
          })

    }


  return (
    <div>
        <h1 style={{color:'Blue'}}>Ajouter ton sac</h1>
      <form>
      <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Nom
          </label>
          <input
            type="text"
            id="inputName"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newsac.nom}
            onChange={(e) => setNewsac({ ...newsac, nom: e.target.value })}
          />
        </div>

    
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Prix
          </label>
          <input
            type="text"
            id="inputColor"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newsac.prix}
            onChange={(e) => setNewsac({ ...newsac, prix: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Image
          </label>
          <input
            type="text"
            id="inputImage"
            className="form-control"
            aria-describedby="nameHelpBlock"
            value={newsac.image}
            onChange={(e) => setNewsac({ ...newsac, image: e.target.value })}
          />
        </div>

        <button className="btn btn-primary" type="button" onClick={handleAddSac}>
          Add sac
        </button>

      </form>
    </div>
  )
}
