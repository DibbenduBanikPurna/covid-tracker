import React, { useState } from 'react';
import Loading from '../../images/loading.gif'
import './Country.css'
const SearchCountry = () => {
    const [info,setInfo]=useState({})
    const [country,setCountry]=useState({})
    const [show,setShow]=useState(false)
    const [isLoading,setIsLoading]=useState(true)
   

    const handleChange=(e)=>{
        const name={
            [e.target.name]:e.target.value
        }
        setInfo(name)
    }
    

    const handleSubmit= (e)=>{
        e.preventDefault()
    
 fetch('http://localhost:4000/single/country',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(info)
    })
     .then(res=>res.json())
    .then(data=>{
        if(data.message){
          alert(data.message)
          
      }
    setCountry(data)
    setShow(true)
    
    
    setInterval(()=>{
        setShow(false)

    },50000)
        
     setIsLoading(false)
   })
    
}
    return (
        <section className="country vh-100">

       
        <div className="text-center">
            <form className="pt-5" onSubmit={handleSubmit}>
            <input placeholder="Enter Country Name Correctly" required className="in" type="text" name="name" onChange={handleChange}></input>
            <br/>
            <input className="btn btn-outline-success" type="submit" value="search"/>
            </form>
            <hr/>
           <div>
            
            {isLoading ? <img src={Loading} alt="" /> : <>
            
            
            
            {show  ?
            <>
            
            <h1 className="text-primary">{country.country}</h1>

            <div className="mt-5">

            <h5 className="text-warning">Total-Cases: {country.cases}</h5>
            <h5 className="text-danger">Total-Deaths: {country.deaths}</h5>
            <h5 className="text-success">Totoal-Recovered: {country.recovered}</h5>
            <h5 className="text-warning" >new-Cases: {country.todayCases}</h5>
            <h5 className="text-danger">new-Death: {country.todayDeaths}</h5>
            <h5 className="text-success">new-recovered: {country.todayRecovered}</h5>
            </div>
            </>
            : ''}
            </>
            }
            
            
            
            
               
            
               
              
           </div>
            
        </div>
        </section>
    );
};

export default SearchCountry;