



import React,{useState} from'react';
import videoBg from'../assets/sky.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import{faCloud} from "@fortawesome/free-solid-svg-icons"
const api={
  key:"f46b4dec37fe1275a4849371f1758930",
  base:"https://api.openweathermap.org/data/2.5/"


}
const Main =()=>{
    const [query,setQuery]= useState('');
    const [weather='Warsaw',setWeather]= useState();
    const getDate = new Date();
    const city='city';
    const country='country';
    const wind_speed='wind speed';
    const temp ='temperature';
    const weather_status="status"
 
    
    
    const search = s =>{
        if(s.key==="Enter"){
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then()
      .then(res =>res.json())
      .then(result =>{
       console.log(weather);
          setWeather(result);
         
          setQuery('');
          
          
         });
         }
      } 
    
    





    return (
    <div className='main'>
      <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted/>
        
        <div className={( weather !== "undefined")  ? 'content' : 'content'}>
        
         
          <div className='search-box'>
          <div className='icon-title'>
         <FontAwesomeIcon className='icon-cloud' icon={faCloud} />
         </div>
            <input type="text" 
            className='search-bar' 
            placeholder='enter the city..'
             onChange={e=>setQuery(e.target.value)}
              value={query} onKeyPress={search}/>
          </div>
   
          {(typeof weather.main !== "undefined") ? (
             
              
          <div className='display-weather'>
          
          <div class="table">
             <div class="table-row-def">
                  <div class="table-col">{city}</div>
                <div class="table-col">{country}</div>
                <div class="table-col">{wind_speed}</div>
                <div class="table-col">{temp}</div>
                <div class="table-col">{weather_status}</div>
            </div>
            <div class="table-row-info">
                <div class="table-col">{weather.name}</div>
                <div class="table-col">{weather.sys.country}</div>
                <div class="table-col">{weather.wind.speed} Km/h</div>
                <div class="table-col">{Math.round(weather.main.temp)}°c</div>
                <div class="table-col">{weather.weather[0].main}</div>
           </div>
        </div>
        </div>





   
        
          
          ) : ('')}
        
       </div>
      
       </div>
    )
}
export default Main