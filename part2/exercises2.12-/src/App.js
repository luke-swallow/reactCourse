import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [countries, setCountries] = useState([])
  const [filterCountry, setCountry] = useState('')
  
  const handleCountry = (event) => {
    setCountry(event.target.value)
  }
  useEffect(() =>{
    axios.get(`https://restcountries.eu/rest/v2/name/${filterCountry}`)
    .then(response=> setCountries(response.data))
  })
  
  return (
    <div>
      find countries <input value={filterCountry} onChange= {handleCountry}/>
      {countries.length < 10? countries.map((countryObj)=> <div key ={countryObj.name}>{countryObj.name}</div>): <div>too many countries</div>}
    </div>
  );
}

export default App;
