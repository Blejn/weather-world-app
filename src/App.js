
import React,{useState} from'react';
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  return (
   <div>

<Main />

   </div>
  );
  // <div className={(typeof weather.main != "undefined") ? (
  //   (weather.weather[0].main === "Clouds") ? 'app clouds' : 
  //   (weather.weather[0].main === "Clear") ? 'app clear' : 
  //   (weather.weather[0].main === "Rain") ? 'app rain' : 'app')
  // : 'app'}>
}

export default App;
