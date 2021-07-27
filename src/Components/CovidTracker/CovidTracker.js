import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Load from '../../images/load.gif'
const CovidTracker = () => {
    const [country,setCountry]=useState([])
    const [names,setName]=useState('')
    const [isLoading,setIsLoading]=useState(true)

 
    useEffect(()=>{

     fetch('http://localhost:4000/covid/country')
      .then(res=>res.json() )
      .then(data=>{
       
        setCountry(data)
        setIsLoading(false)
      })
    },[])
    
   
    return (
        <section className="App background ">
           <input className="mt-4" type="text" onChange={(e)=>setName(e.target.value)} placeholder="Search-Country"/>
             <div className="row mt-5 pt-5">
               {
                 isLoading ? <img src={Load} alt="" />  : 
                 <>
               
             
    
    {
       country.filter((country)=>{
        
         if(names===""){
           return country
         }
         else if(country.country.toLowerCase().includes(names.toLowerCase())){
           return country
         }
         return ""
       }).map((country)=>{
        return <Country key={country.country}  country={country}/>
      })
    }
    </>
  }
  </div>
       
         </section>
    );
};

export default CovidTracker;