import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const BASE_URL = 'https://v6.exchangerate-api.com/v6/72434d9c15584137b880d526/latest/';
 const [a,setA] = useState(1);
 const [from,setFrom] = useState("USD");
 const [to,setTo] = useState("GBP")
 const handleaChange = (event) => {
setA(event.target.value);
 };
 const [b,setB] = useState(1);
 const [rate,setRate] = useState();
 const handlebChange = (event) => {
setB(event.target.value);};
const exchange = useEffect(
  () => {
    fetch(BASE_URL + from)
    .then(res => res.json())
    .then(data => setRate(data.conversion_rates[to]))
  } , [from,to])
 
  return (
    <>
<h1>Currency converter</h1>
    <div>
<input type='number' value={a} onChange={handleaChange} />
<select name="currency" value={from} onChange={(event) => {setFrom(event.target.value)}}>
  <option value="USD">USD - United States Dollar</option>
  <option value="GBP">GBP - British Pound Sterling</option>
  <option value="EUR">EUR - Euro</option>
  <option value="JPY">JPY - Japanese Yen</option>
  <option value="AUD">AUD - Australian Dollar</option>
  <option value="CAD">CAD - Canadian Dollar</option>
  <option value="CHF">CHF - Swiss Franc</option>
  <option value="CNY">CNY - Chinese Yuan</option>
  <option value="SEK">SEK - Swedish Krona</option>
  <option value="NZD">NZD - New Zealand Dollar</option>
  <option value="MXN">MXN - Mexican Peso</option>
  <option value="SGD">SGD - Singapore Dollar</option>
  <option value="HKD">HKD - Hong Kong Dollar</option>
  <option value="NOK">NOK - Norwegian Krone</option>
  <option value="KRW">KRW - South Korean Won</option>
  <option value="TRY">TRY - Turkish Lira</option>
  <option value="RUB">RUB - Russian Ruble</option>
  <option value="INR">INR - Indian Rupee</option>
  <option value="BRL">BRL - Brazilian Real</option>
  <option value="ZAR">ZAR - South African Rand</option>
</select>
</div>
<div>
<input type='number' value={b} onChange={handlebChange} />
<select name="currency" value={to} onChange={(event) => {setTo(event.target.value)}}>
  <option value="USD">USD - United States Dollar</option>
  <option value="GBP">GBP - British Pound Sterling</option>
  <option value="EUR">EUR - Euro</option>
  <option value="JPY">JPY - Japanese Yen</option>
  <option value="AUD">AUD - Australian Dollar</option>
  <option value="CAD">CAD - Canadian Dollar</option>
  <option value="CHF">CHF - Swiss Franc</option>
  <option value="CNY">CNY - Chinese Yuan</option>
  <option value="SEK">SEK - Swedish Krona</option>
  <option value="NZD">NZD - New Zealand Dollar</option>
  <option value="MXN">MXN - Mexican Peso</option>
  <option value="SGD">SGD - Singapore Dollar</option>
  <option value="HKD">HKD - Hong Kong Dollar</option>
  <option value="NOK">NOK - Norwegian Krone</option>
  <option value="KRW">KRW - South Korean Won</option>
  <option value="TRY">TRY - Turkish Lira</option>
  <option value="RUB">RUB - Russian Ruble</option>
  <option value="INR">INR - Indian Rupee</option>
  <option value="BRL">BRL - Brazilian Real</option>
  <option value="ZAR">ZAR - South African Rand</option>
</select>
</div>
<div>
<button onClick={() => {}}></button>
</div>
<div>
  <p>{a + ' ' + from + ' is ' + (Math.round(rate*a*100)/100) + ' ' + to}</p>
</div>

</>
  )
}

export default App
