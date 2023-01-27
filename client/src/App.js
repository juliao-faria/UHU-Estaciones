
import React,{useState} from "react";
import Estaciones from "./componets/Estaciones"
import NavBar from "./componets/NavBar"
import axios from "axios";

const App=()=>{
    const [descargado,setDescargado]=useState(false)
  
  const descargaDatos =()=>{
  
    const url="http://localhost:3000/downloadTxt"
    axios.get(url).then((response) => {
      setDescargado(true)
      console.log(response.data)
    });
  
  }
  return(
    <div>
        <NavBar descargaDatos={descargaDatos}/>
        <br/> <br/><br/><br/><br/><br/><br/>
        <Estaciones descargado={descargado}/>
    </div>
  )
}

export default App