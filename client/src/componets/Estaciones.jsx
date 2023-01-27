import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Card from "./Card";

import "./Estaciones.css";
import Tabla1 from "./tablas/Tabla1";
import Tabla2 from "./tablas/Tabla2"

const Estaciones = (props) => {

	const [estaciones, setEstaciones] = useState([]);
	const [elegido, setElegido] = useState("");
	const [provincias,setProvincias]=useState([])
	const [estacionesFiltradas,setEstacionesFiltradas]=useState([])
	

	const getAll = () => {
		axios.get("http://localhost:3000/getAll").then((response) => {
			setEstaciones(response.data);
		});
	};

	const listingFilter=(e)=>{
        if(e.target.value=="Choose..."){
			Swal.fire({
				position: 'top-center',
				icon: 'warning',
				title: 'Elija el valor correcto',
				showConfirmButton: true,
			  })
		} 
		if(e.target.value=="Todas las estaciones"){
			setElegido("Todas las estaciones")
		}
		if(e.target.value=="Buescar por provincia"){
			setElegido("Buescar por provincia")
		}
	}
	
	const getByProvince = (parametro) => {
		const url="http://localhost:3000/getByProvince/"+parametro
		axios.get(url).then((response) => {
			setEstacionesFiltradas(response.data);
		});
		
	};
	const getAllProvince = (prov) => {
		const url="http://localhost:3000/getAllProvince"
		axios.get(url).then((response) => {
			setProvincias(response.data);
		});
		
	};
	

	useEffect(() => {
		getAll();
		getByProvince()
		getAllProvince()
	}, []);

	useEffect(() => {
		getAll();
		getByProvince()
		getAllProvince()
	}, [props.descargado]);

	

	return (
		<React.Fragment>
				<div className="collection col-lg-3 m-auto my-0">
					<label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
						Preference
					</label>
					<select
						className=" mr-sm-2 darAlto border_color form-control"
						id="inlineFormCustomSelect"
						name="option"
						onChange={listingFilter}
					>
						<option selected>Choose...</option>
						<option value="Buescar por provincia">Filtrar por provincia</option>
						<option value="Todas las estaciones">Todas las estaciones</option>
					</select>
				</div>
				<br />
			
			   {elegido=="Todas las estaciones" ?<Card><Tabla1 estaciones={estaciones}/></Card>:<Tabla2 provincias={provincias} estacionesFiltradas={estacionesFiltradas}  getByProvince={getByProvince} />}
			
		</React.Fragment>
	);
};

export default Estaciones;
