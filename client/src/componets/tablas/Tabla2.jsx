import React from "react";
import {useState} from "react";
import "./Tabla2.css";
import BuscadorProvincias from "./Buscador Provincias";
const Tala1 = (props) => {
	const [elegido, setElegido] = useState("");

	return (
		<React.Fragment>
			<BuscadorProvincias provincias={props.provincias} estacionesFiltradas={props.estacionesFiltradas} getByProvince={props.getByProvince}/>
			<br />
			<div className="row">
                {
                    props.estacionesFiltradas.length!=0? <table className="table col-lg-8 m-auto">
                    <thead>
                    <span>Total de estaciones <h5>{props.estacionesFiltradas.length}</h5></span>
                        <tr>
                            <th scope="col">Provincia</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Latitud</th>
                            <th scope="col">Longitud</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.estacionesFiltradas.map((prov, i) => (
                                <tr key={i}>
                                    <td>{prov.provincia}</td>
                                    <td>{prov.nombre}</td>
                                    <td>{prov.latitud}</td>
                                    <td>{prov.longitud}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>:  <div className="col-lg-8 m-auto"><h5>Esperando datos filtrados...</h5></div>
                }
            </div>
		</React.Fragment>
	);
};

export default Tala1;
