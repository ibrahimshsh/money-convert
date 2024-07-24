import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function App() {
  const data = [
    { name: 'Page A', uv: 400, pv: 24, amt: 24 },
    { name: 'Page B', uv: 30000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000 },
    { name: 'Page D', uv: 2780 },
    { name: 'Page E', uv: 1890 },
    { name: 'Page F', uv: 2390 },
    { name: 'Page G', uv: 3490}
  ];
  const type = ["latest", "history"];
 var y = [];
  let yourDate = new Date();
  const [years,setYears] = useState([2024]);
  const createDate = (year,times) => {
   
  for (let i = 0; i < times; i++){
    y.push(year--)
  }
setYears(y);
  }
  window.onload = function()  {
    yourDate.toISOString().substring(0,4)
    createDate()
  }
  let ratess = [];
const BASE_URL = 'https://v6.exchangerate-api.com/v6/72434d9c15584137b880d526/';
 const [a,setA] = useState("");
 const [decplace,setDecplace] = useState(2);
 const [from,setFrom] = useState("USD");
 const [to,setTo] = useState("GBP")
 const handleaChange = (event) => {
  setA(event.target.value);
  setB((event.target.value*rate).toFixed(decplace))
}
 const [b,setB] = useState("");
 const [rate,setRate] = useState();
 const handlebChange = (event) => {
setB(event.target.value);
setA((event.target.value/rate).toFixed(decplace));
};
const handleDecPlaceChange = (event) => {
  setDecplace(event.target.value);
  };
const getEx = (y) => {
  fetch('https://api.forexrateapi.com/v1/'+y+'-01-01'+'?api_key=e2decf5c771677bde7de873af272985e&base='+from)
  .then(res => res.json())
  .then(data => {console.log(data);console.log(data.rates);ratess.push(data.rates[(to.substring(0,3))])})
}
const getExChange = useEffect(years.map(getEx),[to,from,years])
const [ex,setEx] = useState([]);
const exchange = useEffect(
  () => {
    fetch(BASE_URL + type[0] + "/" + from)
    .then(res => res.json())
    .then(data => {setRate(data.conversion_rates[to]);setRate(data.conversion_rates[to]);console.log(data.conversion_rates);})
  } , [from,to,years])
  const renderLineChart = (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="AED" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
    </LineChart>
  );
  return (
    <>
<h1>Currency converter</h1>
    <div>
<input type='number' value={a} onChange={handleaChange} />
<select name="currency" value={from} onChange={(event) => {setFrom(event.target.value)}}>
<option value="AED">AED - United Arab Emirates Dirham</option>
  <option value="AFN">AFN - Afghan Afghani</option>
  <option value="ALL">ALL - Albanian Lek</option>
  <option value="AMD">AMD - Armenian Dram</option>
  <option value="ANG">ANG - Netherlands Antillean Guilder</option>
  <option value="AOA">AOA - Angolan Kwanza</option>
  <option value="ARS">ARS - Argentine Peso</option>
  <option value="AUD">AUD - Australian Dollar</option>
  <option value="AWG">AWG - Aruban Florin</option>
  <option value="AZN">AZN - Azerbaijani Manat</option>
  <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
  <option value="BBD">BBD - Barbadian Dollar</option>
  <option value="BDT">BDT - Bangladeshi Taka</option>
  <option value="BGN">BGN - Bulgarian Lev</option>
  <option value="BHD">BHD - Bahraini Dinar</option>
  <option value="BIF">BIF - Burundian Franc</option>
  <option value="BMD">BMD - Bermudian Dollar</option>
  <option value="BND">BND - Brunei Dollar</option>
  <option value="BOB">BOB - Bolivian Boliviano</option>
  <option value="BRL">BRL - Brazilian Real</option>
  <option value="BSD">BSD - Bahamian Dollar</option>
  <option value="BTN">BTN - Bhutanese Ngultrum</option>
  <option value="BWP">BWP - Botswanan Pula</option>
  <option value="BYN">BYN - Belarusian Ruble</option>
  <option value="BZD">BZD - Belize Dollar</option>
  <option value="CAD">CAD - Canadian Dollar</option>
  <option value="CDF">CDF - Congolese Franc</option>
  <option value="CHF">CHF - Swiss Franc</option>
  <option value="CLP">CLP - Chilean Peso</option>
  <option value="CNY">CNY - Chinese Yuan</option>
  <option value="COP">COP - Colombian Peso</option>
  <option value="CRC">CRC - Costa Rican Colón</option>
  <option value="CUP">CUP - Cuban Peso</option>
  <option value="CVE">CVE - Cape Verdean Escudo</option>
  <option value="CZK">CZK - Czech Koruna</option>
  <option value="DJF">DJF - Djiboutian Franc</option>
  <option value="DKK">DKK - Danish Krone</option>
  <option value="DOP">DOP - Dominican Peso</option>
  <option value="DZD">DZD - Algerian Dinar</option>
  <option value="EGP">EGP - Egyptian Pound</option>
  <option value="ERN">ERN - Eritrean Nakfa</option>
  <option value="ETB">ETB - Ethiopian Birr</option>
  <option value="EUR">EUR - Euro</option>
  <option value="FJD">FJD - Fijian Dollar</option>
  <option value="FKP">FKP - Falkland Islands Pound</option>
  <option value="FOK">FOK - Faroese Króna</option>
  <option value="GBP">GBP - British Pound Sterling</option>
  <option value="GEL">GEL - Georgian Lari</option>
  <option value="GGP">GGP - Guernsey Pound</option>
  <option value="GHS">GHS - Ghanaian Cedi</option>
  <option value="GIP">GIP - Gibraltar Pound</option>
  <option value="GMD">GMD - Gambian Dalasi</option>
  <option value="GNF">GNF - Guinean Franc</option>
  <option value="GTQ">GTQ - Guatemalan Quetzal</option>
  <option value="GYD">GYD - Guyanaese Dollar</option>
  <option value="HKD">HKD - Hong Kong Dollar</option>
  <option value="HNL">HNL - Honduran Lempira</option>
  <option value="HRK">HRK - Croatian Kuna</option>
  <option value="HTG">HTG - Haitian Gourde</option>
  <option value="HUF">HUF - Hungarian Forint</option>
  <option value="IDR">IDR - Indonesian Rupiah</option>
  <option value="ILS">ILS - Israeli New Shekel</option>
  <option value="IMP">IMP - Isle of Man Pound</option>
  <option value="INR">INR - Indian Rupee</option>
  <option value="IQD">IQD - Iraqi Dinar</option>
  <option value="IRR">IRR - Iranian Rial</option>
  <option value="ISK">ISK - Icelandic Króna</option>
  <option value="JEP">JEP - Jersey Pound</option>
  <option value="JMD">JMD - Jamaican Dollar</option>
  <option value="JOD">JOD - Jordanian Dinar</option>
  <option value="JPY">JPY - Japanese Yen</option>
  <option value="KES">KES - Kenyan Shilling</option>
  <option value="KGS">KGS - Kyrgystani Som</option>
  <option value="KHR">KHR - Cambodian Riel</option>
  <option value="KID">KID - Kiribati Dollar</option>
  <option value="KMF">KMF - Comorian Franc</option>
  <option value="KRW">KRW - South Korean Won</option>
  <option value="KWD">KWD - Kuwaiti Dinar</option>
  <option value="KYD">KYD - Cayman Islands Dollar</option>
  <option value="KZT">KZT - Kazakhstani Tenge</option>
  <option value="LAK">LAK - Laotian Kip</option>
  <option value="LBP">LBP - Lebanese Pound</option>
  <option value="LKR">LKR - Sri Lankan Rupee</option>
  <option value="LRD">LRD - Liberian Dollar</option>
  <option value="LSL">LSL - Lesotho Loti</option>
  <option value="LYD">LYD - Libyan Dinar</option>
  <option value="MAD">MAD - Moroccan Dirham</option>
  <option value="MDL">MDL - Moldovan Leu</option>
  <option value="MGA">MGA - Malagasy Ariary</option>
  <option value="MKD">MKD - Macedonian Denar</option>
  <option value="MMK">MMK - Myanma Kyat</option>
  <option value="MNT">MNT - Mongolian Tugrik</option>
  <option value="MOP">MOP - Macanese Pataca</option>
  <option value="MRU">MRU - Mauritanian Ouguiya</option>
  <option value="MUR">MUR - Mauritian Rupee</option>
  <option value="MVR">MVR - Maldivian Rufiyaa</option>
  <option value="MWK">MWK - Malawian Kwacha</option>
  <option value="MXN">MXN - Mexican Peso</option>
  <option value="MYR">MYR - Malaysian Ringgit</option>
  <option value="MZN">MZN - Mozambican Metical</option>
  <option value="NAD">NAD - Namibian Dollar</option>
  <option value="NGN">NGN - Nigerian Naira</option>
  <option value="NIO">NIO - Nicaraguan Córdoba</option>
  <option value="NOK">NOK - Norwegian Krone</option>
  <option value="NPR">NPR - Nepalese Rupee</option>
  <option value="NZD">NZD - New Zealand Dollar</option>
  <option value="OMR">OMR - Omani Rial</option>
  <option value="PAB">PAB - Panamanian Balboa</option>
  <option value="PEN">PEN - Peruvian Nuevo Sol</option>
  <option value="PGK">PGK - Papua New Guinean Kina</option>
  <option value="PHP">PHP - Philippine Peso</option>
  <option value="PKR">PKR - Pakistani Rupee</option>
  <option value="PLN">PLN - Polish Zloty</option>
  <option value="PYG">PYG - Paraguayan Guarani</option>
  <option value="QAR">QAR - Qatari Rial</option>
  <option value="RON">RON - Romanian Leu</option>
  <option value="RSD">RSD - Serbian Dinar</option>
  <option value="RUB">RUB - Russian Ruble</option>
  <option value="RWF">RWF - Rwandan Franc</option>
  <option value="SAR">SAR - Saudi Riyal</option>
  <option value="SBD">SBD - Solomon Islands Dollar</option>
  <option value="SCR">SCR - Seychellois Rupee</option>
  <option value="SDG">SDG - Sudanese Pound</option>
  <option value="SEK">SEK - Swedish Krona</option>
  <option value="SGD">SGD - Singapore Dollar</option>
  <option value="SHP">SHP - Saint Helena Pound</option>
  <option value="SLE">SLE - Sierra Leonean Leone</option>
  <option value="SLL">SLL - Sierra Leonean Leone (old)</option>
  <option value="SOS">SOS - Somali Shilling</option>
  <option value="SRD">SRD - Surinamese Dollar</option>
  <option value="SSP">SSP - South Sudanese Pound</option>
  <option value="STN">STN - São Tomé and Príncipe Dobra</option>
  <option value="SYP">SYP - Syrian Pound</option>
  <option value="SZL">SZL - Swazi Lilangeni</option>
  <option value="THB">THB - Thai Baht</option>
  <option value="TJS">TJS - Tajikistani Somoni</option>
  <option value="TMT">TMT - Turkmenistani Manat</option>
  <option value="TND">TND - Tunisian Dinar</option>
  <option value="TOP">TOP - Tongan Paʻanga</option>
  <option value="TRY">TRY - Turkish Lira</option>
  <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
  <option value="TVD">TVD - Tuvaluan Dollar</option>
  <option value="TWD">TWD - New Taiwan Dollar</option>
  <option value="TZS">TZS - Tanzanian Shilling</option>
  <option value="UAH">UAH - Ukrainian Hryvnia</option>
  <option value="UGX">UGX - Ugandan Shilling</option>
  <option value="USD">USD - United States Dollar</option>
  <option value="UYU">UYU - Uruguayan Peso</option>
  <option value="UZS">UZS - Uzbekistan Som</option>
  <option value="VES">VES - Venezuelan Bolívar Soberano</option>
  <option value="VND">VND - Vietnamese Dong</option>
  <option value="VUV">VUV - Vanuatu Vatu</option>
  <option value="WST">WST - Samoan Tala</option>
  <option value="XAF">XAF - CFA Franc BEAC</option>
  <option value="XCD">XCD - East Caribbean Dollar</option>
  <option value="XDR">XDR - Special Drawing Rights</option>
  <option value="XOF">XOF - CFA Franc BCEAO</option>
  <option value="XPF">XPF - CFP Franc</option>
  <option value="YER">YER - Yemeni Rial</option>
  <option value="ZAR">ZAR - South African Rand</option>
  <option value="ZMW">ZMW - Zambian Kwacha</option>
  <option value="ZWL">ZWL - Zimbabwean Dollar</option>
</select>
</div>
<div>
  <h4>=</h4>
</div>
<div>
<input type='number' value={b} onChange={handlebChange} />
<select name="currency" value={to} onChange={(event) => {setTo(event.target.value); setB(b/rate);}}>
<option value="AED">AED - United Arab Emirates Dirham</option>
  <option value="AFN">AFN - Afghan Afghani</option>
  <option value="ALL">ALL - Albanian Lek</option>
  <option value="AMD">AMD - Armenian Dram</option>
  <option value="ANG">ANG - Netherlands Antillean Guilder</option>
  <option value="AOA">AOA - Angolan Kwanza</option>
  <option value="ARS">ARS - Argentine Peso</option>
  <option value="AUD">AUD - Australian Dollar</option>
  <option value="AWG">AWG - Aruban Florin</option>
  <option value="AZN">AZN - Azerbaijani Manat</option>
  <option value="BAM">BAM - Bosnia-Herzegovina Convertible Mark</option>
  <option value="BBD">BBD - Barbadian Dollar</option>
  <option value="BDT">BDT - Bangladeshi Taka</option>
  <option value="BGN">BGN - Bulgarian Lev</option>
  <option value="BHD">BHD - Bahraini Dinar</option>
  <option value="BIF">BIF - Burundian Franc</option>
  <option value="BMD">BMD - Bermudian Dollar</option>
  <option value="BND">BND - Brunei Dollar</option>
  <option value="BOB">BOB - Bolivian Boliviano</option>
  <option value="BRL">BRL - Brazilian Real</option>
  <option value="BSD">BSD - Bahamian Dollar</option>
  <option value="BTN">BTN - Bhutanese Ngultrum</option>
  <option value="BWP">BWP - Botswanan Pula</option>
  <option value="BYN">BYN - Belarusian Ruble</option>
  <option value="BZD">BZD - Belize Dollar</option>
  <option value="CAD">CAD - Canadian Dollar</option>
  <option value="CDF">CDF - Congolese Franc</option>
  <option value="CHF">CHF - Swiss Franc</option>
  <option value="CLP">CLP - Chilean Peso</option>
  <option value="CNY">CNY - Chinese Yuan</option>
  <option value="COP">COP - Colombian Peso</option>
  <option value="CRC">CRC - Costa Rican Colón</option>
  <option value="CUP">CUP - Cuban Peso</option>
  <option value="CVE">CVE - Cape Verdean Escudo</option>
  <option value="CZK">CZK - Czech Koruna</option>
  <option value="DJF">DJF - Djiboutian Franc</option>
  <option value="DKK">DKK - Danish Krone</option>
  <option value="DOP">DOP - Dominican Peso</option>
  <option value="DZD">DZD - Algerian Dinar</option>
  <option value="EGP">EGP - Egyptian Pound</option>
  <option value="ERN">ERN - Eritrean Nakfa</option>
  <option value="ETB">ETB - Ethiopian Birr</option>
  <option value="EUR">EUR - Euro</option>
  <option value="FJD">FJD - Fijian Dollar</option>
  <option value="FKP">FKP - Falkland Islands Pound</option>
  <option value="FOK">FOK - Faroese Króna</option>
  <option value="GBP">GBP - British Pound Sterling</option>
  <option value="GEL">GEL - Georgian Lari</option>
  <option value="GGP">GGP - Guernsey Pound</option>
  <option value="GHS">GHS - Ghanaian Cedi</option>
  <option value="GIP">GIP - Gibraltar Pound</option>
  <option value="GMD">GMD - Gambian Dalasi</option>
  <option value="GNF">GNF - Guinean Franc</option>
  <option value="GTQ">GTQ - Guatemalan Quetzal</option>
  <option value="GYD">GYD - Guyanaese Dollar</option>
  <option value="HKD">HKD - Hong Kong Dollar</option>
  <option value="HNL">HNL - Honduran Lempira</option>
  <option value="HRK">HRK - Croatian Kuna</option>
  <option value="HTG">HTG - Haitian Gourde</option>
  <option value="HUF">HUF - Hungarian Forint</option>
  <option value="IDR">IDR - Indonesian Rupiah</option>
  <option value="ILS">ILS - Israeli New Shekel</option>
  <option value="IMP">IMP - Isle of Man Pound</option>
  <option value="INR">INR - Indian Rupee</option>
  <option value="IQD">IQD - Iraqi Dinar</option>
  <option value="IRR">IRR - Iranian Rial</option>
  <option value="ISK">ISK - Icelandic Króna</option>
  <option value="JEP">JEP - Jersey Pound</option>
  <option value="JMD">JMD - Jamaican Dollar</option>
  <option value="JOD">JOD - Jordanian Dinar</option>
  <option value="JPY">JPY - Japanese Yen</option>
  <option value="KES">KES - Kenyan Shilling</option>
  <option value="KGS">KGS - Kyrgystani Som</option>
  <option value="KHR">KHR - Cambodian Riel</option>
  <option value="KID">KID - Kiribati Dollar</option>
  <option value="KMF">KMF - Comorian Franc</option>
  <option value="KRW">KRW - South Korean Won</option>
  <option value="KWD">KWD - Kuwaiti Dinar</option>
  <option value="KYD">KYD - Cayman Islands Dollar</option>
  <option value="KZT">KZT - Kazakhstani Tenge</option>
  <option value="LAK">LAK - Laotian Kip</option>
  <option value="LBP">LBP - Lebanese Pound</option>
  <option value="LKR">LKR - Sri Lankan Rupee</option>
  <option value="LRD">LRD - Liberian Dollar</option>
  <option value="LSL">LSL - Lesotho Loti</option>
  <option value="LYD">LYD - Libyan Dinar</option>
  <option value="MAD">MAD - Moroccan Dirham</option>
  <option value="MDL">MDL - Moldovan Leu</option>
  <option value="MGA">MGA - Malagasy Ariary</option>
  <option value="MKD">MKD - Macedonian Denar</option>
  <option value="MMK">MMK - Myanma Kyat</option>
  <option value="MNT">MNT - Mongolian Tugrik</option>
  <option value="MOP">MOP - Macanese Pataca</option>
  <option value="MRU">MRU - Mauritanian Ouguiya</option>
  <option value="MUR">MUR - Mauritian Rupee</option>
  <option value="MVR">MVR - Maldivian Rufiyaa</option>
  <option value="MWK">MWK - Malawian Kwacha</option>
  <option value="MXN">MXN - Mexican Peso</option>
  <option value="MYR">MYR - Malaysian Ringgit</option>
  <option value="MZN">MZN - Mozambican Metical</option>
  <option value="NAD">NAD - Namibian Dollar</option>
  <option value="NGN">NGN - Nigerian Naira</option>
  <option value="NIO">NIO - Nicaraguan Córdoba</option>
  <option value="NOK">NOK - Norwegian Krone</option>
  <option value="NPR">NPR - Nepalese Rupee</option>
  <option value="NZD">NZD - New Zealand Dollar</option>
  <option value="OMR">OMR - Omani Rial</option>
  <option value="PAB">PAB - Panamanian Balboa</option>
  <option value="PEN">PEN - Peruvian Nuevo Sol</option>
  <option value="PGK">PGK - Papua New Guinean Kina</option>
  <option value="PHP">PHP - Philippine Peso</option>
  <option value="PKR">PKR - Pakistani Rupee</option>
  <option value="PLN">PLN - Polish Zloty</option>
  <option value="PYG">PYG - Paraguayan Guarani</option>
  <option value="QAR">QAR - Qatari Rial</option>
  <option value="RON">RON - Romanian Leu</option>
  <option value="RSD">RSD - Serbian Dinar</option>
  <option value="RUB">RUB - Russian Ruble</option>
  <option value="RWF">RWF - Rwandan Franc</option>
  <option value="SAR">SAR - Saudi Riyal</option>
  <option value="SBD">SBD - Solomon Islands Dollar</option>
  <option value="SCR">SCR - Seychellois Rupee</option>
  <option value="SDG">SDG - Sudanese Pound</option>
  <option value="SEK">SEK - Swedish Krona</option>
  <option value="SGD">SGD - Singapore Dollar</option>
  <option value="SHP">SHP - Saint Helena Pound</option>
  <option value="SLE">SLE - Sierra Leonean Leone</option>
  <option value="SLL">SLL - Sierra Leonean Leone (old)</option>
  <option value="SOS">SOS - Somali Shilling</option>
  <option value="SRD">SRD - Surinamese Dollar</option>
  <option value="SSP">SSP - South Sudanese Pound</option>
  <option value="STN">STN - São Tomé and Príncipe Dobra</option>
  <option value="SYP">SYP - Syrian Pound</option>
  <option value="SZL">SZL - Swazi Lilangeni</option>
  <option value="THB">THB - Thai Baht</option>
  <option value="TJS">TJS - Tajikistani Somoni</option>
  <option value="TMT">TMT - Turkmenistani Manat</option>
  <option value="TND">TND - Tunisian Dinar</option>
  <option value="TOP">TOP - Tongan Paʻanga</option>
  <option value="TRY">TRY - Turkish Lira</option>
  <option value="TTD">TTD - Trinidad and Tobago Dollar</option>
  <option value="TVD">TVD - Tuvaluan Dollar</option>
  <option value="TWD">TWD - New Taiwan Dollar</option>
  <option value="TZS">TZS - Tanzanian Shilling</option>
  <option value="UAH">UAH - Ukrainian Hryvnia</option>
  <option value="UGX">UGX - Ugandan Shilling</option>
  <option value="USD">USD - United States Dollar</option>
  <option value="UYU">UYU - Uruguayan Peso</option>
  <option value="UZS">UZS - Uzbekistan Som</option>
  <option value="VES">VES - Venezuelan Bolívar Soberano</option>
  <option value="VND">VND - Vietnamese Dong</option>
  <option value="VUV">VUV - Vanuatu Vatu</option>
  <option value="WST">WST - Samoan Tala</option>
  <option value="XAF">XAF - CFA Franc BEAC</option>
  <option value="XCD">XCD - East Caribbean Dollar</option>
  <option value="XDR">XDR - Special Drawing Rights</option>
  <option value="XOF">XOF - CFA Franc BCEAO</option>
  <option value="XPF">XPF - CFP Franc</option>
  <option value="YER">YER - Yemeni Rial</option>
  <option value="ZAR">ZAR - South African Rand</option>
  <option value="ZMW">ZMW - Zambian Kwacha</option>
  <option value="ZWL">ZWL - Zimbabwean Dollar</option>
</select>
</div>
<div>
<button onClick={() => {console.log(JSON.stringify(ratess))}}>yvu</button>
</div>
<div>
  <p>{a + ' ' + from + ' is ' + (a*rate).toFixed(decplace) + ' ' + to}</p>
</div>
<div>
<input type='number' value={decplace} onChange={handleDecPlaceChange} />
</div>
<div>
  {renderLineChart}
  <input type='number' onChange={() =>{createDate(2024,event.target.value)
    console.log(years)}}/>
</div>
<div>
  <p>{ex} is</p>
  <p>
l
  </p>
</div>
</>
  )
}

export default App
