import React, { useState, useEffect } from "react";
import Loading from './loadingComponent'


export default function Home() {
    const [countriesList, setcountriesList] = useState();
    const [gdata, setGdata] = useState();
    const [bdata, setBdata] = useState();
    const [dataLoaded, setDataLoaded] = useState(false);
    const [countryData, setcountryData] = useState({});
    console.log("Country data : ",countryData);
    console.log(bdata);
    const getCountry = (country) => {
const data = bdata.filter((data) =>  data.Country == country);
 setcountryData(data[0]);
console.log("Country : ",countryData)
};
var ele;
if(countryData.ID == undefined)
{
    ele = <div></div>;

}
else{
        ele =  
        <div class=" z-depth-1 card my-3 col-sm-12 col-md-8 col-lg-6 card_prod">
        <div class="card-body">
        <h5 class="card-title">{countryData.Country.toUpperCase()}</h5>
        <hr/>
        <p class="card-text">
        <strong>Total Cases :
        {countryData.TotalConfirmed}</strong>
        </p>
        <p class="card-text">
        <strong> Active Cases :    {countryData.NewConfirmed}</strong>


        </p>
        <p class="card-text">
        <strong>Recovered  :  {countryData.TotalRecovered} </strong>

        </p>
        <p class="card-text">
        <strong>Total Deaths : {countryData.TotalDeaths}</strong>

        </p>
        </div>
        </div>
}
    // const [country, setcountry] = useState();

    useEffect(() => {
        console.log("use effect!!");
        fetch("/summary", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data is ", data);
                setGdata(data.Global);
                const list = data.Countries.map((data) => {
                    return data.Country;
                });
                setcountriesList(list);
                setBdata(data.Countries);
                setDataLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    console.log(bdata);
    console.log(countriesList);

    return dataLoaded === false ? (
        <Loading />
    ) : (
        <div>
 <div className="container ">

<div className="container mt-4">
    <h2><strong>World Wide Covid Statistics</strong></h2>
    <hr/>
    <div className="row">
        <div className="col-12 col-xs-12 col-md-3 col-lg-3 m-1">
            <div class=" z-depth-1 card bg-success card_prod">
                <div class="card-body">
                    <h4 class="card-title">Discharged</h4>
                    <p class="card-text" style={{color : "white", fontSize : 25}}>
                        {gdata.TotalRecovered}
                    </p>
                </div>
            </div>
        </div>
        <div className="col-12 col-xs-12 col-md-3 col-lg-3 m-1">
            <div class=" z-depth-1 card_prod card bg-warning">
                <div class="card-body">
                    <h4 class="card-title">Confirmed Cases</h4>
                    <p class="card-text" style={{color : "white", fontSize : 25}}>
                        {gdata.TotalConfirmed}
                    </p>
                </div>
            </div>
        </div>
        <div className="col-12 col-xs-12 col-md-3 col-lg-3 m-1">
            <div class=" z-depth-1 card bg-danger card_prod">
                <div class="card-body">
                    <h4 class="card-title">Total Death</h4>
                    <strong>
                    <p class="card-text" style={{color : "white", fontSize : 25}}>
                        {gdata.TotalDeaths}</p>
                        </strong>
                
                </div>
            </div>
        </div>
    </div>

    
    <div className="container mt-4 p-2">

    <h3><strong>Select Your Country</strong></h3>
    <hr/>

        <select   onChange={(e) => getCountry(e.target.value)} id="country" class="  browser-default custom-select  col-sm-12 col-md-8 col-lg-6 ">
            <option defaultValue="Select Country" >Select Country</option>
            {countriesList.map((country) => (

                <option value={country}>{country}
                </option>

            ))}
            

        </select>
       
{ele}
    </div>
</div>
</div>

        </div>
    );
}

    
    