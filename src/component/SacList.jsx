import React from 'react'
import Data from '../database/Data'
import AddSac from './AddSac';
import Search from './Search';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default function SacList() {
    const[sac,setsac]=useState(Data)

    const [filter, setFilter] = useState('');

    const handleAddSac=(newsac) =>{
    const updateSac=[...sac,{...newsac,id:sac.length+1}]
    setsac(updateSac)
    }

    const handleFilter = (newFilter) => {
      setFilter(newFilter);
    };
  
    const filteredsac = sac.filter((sac) =>
      sac.nom.toLowerCase().includes(filter.toLowerCase())
    );
  return (
    <div>
       <Search onSearchChange={handleFilter} />
        <h1> Liste des sacs </h1>
      {filteredsac.map((ele)=>(
        <div class="card" style={{width: "250px"}} key={ele.id}>
        <img src={ele.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{ele.nom}</h5>
          <p class="card-text">{ele.prix}</p>
         
        </div>
      </div>
      ))
      
      }
      <AddSac onAddSac={handleAddSac}/>
    </div>

  )
}
