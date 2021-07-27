import React from 'react';

const Country = ({country}) => {
   
    return (
        <div className="col-md-3 mt-5">
            <div className="card p-2">
                <img className="img-fluid img-thumbnail rounded rotated " src={country.countryInfo.flag} alt="" />
                <div className="card-body m-3 bg-dark bord">
                    <h5 className="text-primary">{country.country}</h5>
                    <h5 className="text-warning">Total Cases:{country.cases}</h5>
                    <h5 className="text-danger">Deaths:{country.deaths}</h5>
                    <h5 className="text-danger">Critical {country.critical}</h5>
                    <h5 className="text-light"> Tests:{country.tests}</h5>
                    <h5 className="text-warning">new Cases:{country.todayCases}</h5>
                    <h5 className="text-danger">new deaths:{country.todayDeaths}</h5>
                    <h5 className="text-success">new Recovered: {country.todayRecovered}</h5>
                </div>
            </div>
            
        </div>
    );
};

export default Country;