import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Covid from '../../images/covid19.jpg'
const HomePage = () => {
    const [covidData,setCovidData]=useState({})
    //const [yesResult,setYesResult]=useState({})

    useEffect(()=>{
        fetch('http://localhost:4000/today/world')
        .then(res=>res.json())
        .then(data=>{
          
           
           
            setCovidData(data)
        })
    },[])

   
    return (
       
    <section className=" bg-dark vh-100 ">

    
        <div className="row">
            <div className="col-md-4 mt-5 pt-5">

            <img style={{height:'180px'}} className="img-fluid rounded-circle App-logo"  src={Covid} alt=""/>
            <br/>
            <br/>
            <br/>
           <Link to="/covid">
            <button className="btn btn-outline-warning m-5" >Explore More?</button>
            </Link>

            </div>
           
        <div className="col-md-7 mt-5 pt-5">

       
           <table className="table">
          <thead className="thead-light">
            <tr>
            <th className="text-primary">Total Cases:</th>
              <th className="text-warning">Today Cases:</th>
              <th className="text-danger">Total Deaths:</th>
              <th className="text-danger">Today Deaths:</th>
              <th className="text-success">Total Recovered:</th>
              <th className="text-success">Today Recovered:</th>
              <th className="text-warning">Critical:</th>
              <th className="text-light">Total Tests:</th>
              <th className="text-light">Affected Country:</th>
            </tr>

          </thead>
          <tbody>
            <tr>
                <td className="text-primary">{covidData.cases} </td>
                <td className="text-warning">{covidData.todayCases} </td>
                <td className="text-danger">{covidData.deaths} </td>
                <td className="text-danger">{covidData.todayDeaths} </td>
                <td className="text-success">{covidData.recovered} </td>
                <td className="text-success">
                {covidData.todayRecovered} man
                </td>
                <td className="text-warning">{covidData.critical} man</td>
                <td className="text-light">{covidData.tests} man</td>
                <td className="text-light">{covidData.affectedCountries} country</td>
            </tr>
            
          </tbody>
          </table>
         
          </div>
           
           
               
                 
        </div>
        
        </section>

    );
};

export default HomePage;