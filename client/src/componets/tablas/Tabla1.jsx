import React from "react"
const Tabla1=(props)=>{
    return <React.Fragment>
        <br />
				<table class="table">
					<thead>
						<tr>
							<th scope="col">Provincia</th>
							<th scope="col">Nombre</th>
							<th scope="col">Latitud</th>
							<th scope="col">Longitud</th>
						</tr>
					</thead>
					<tbody>
						{props.estaciones.map((estacion, i) => (
							<tr key={i}>
								<td>{estacion.provincia}</td>
								<td>{estacion.nombre}</td>
								<td>{estacion.latitud}</td>
								<td>{estacion.longitud}</td>
							</tr>
						))}
					</tbody>
				</table>
    </React.Fragment>
}

export default Tabla1