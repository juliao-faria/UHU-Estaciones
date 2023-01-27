import React, {useState, useEffect} from "react";
import Swal from "sweetalert2";
const BuscadorProvincias = (props) => {


    const getEvent=(e)=>{
       if(e.target.value=="Choose..."){
          Swal.fire({
            position: 'top-center',
            icon: 'warning',
            title: 'Elija una provincia',
            showConfirmButton: true,
          })
       }else{
        props.getByProvince(e.target.value)
       }
    }
	return (
		<React.Fragment>
			<div className="row">
				<div className="collection col-lg-8 m-auto my-0">
					<label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
						Preference
					</label>
					<select
						className=" mr-sm-2 darAlto border_color form-control"
						id="inlineFormCustomSelect"
						name="option"
                        onChange={getEvent}
					>
						<option selected>Choose...</option>
						{props.provincias.map(provincia=><option value={provincia.provincia}>{provincia.provincia}</option>)}
						
					</select>
				</div>
			</div>
		</React.Fragment>
	);
};
export default BuscadorProvincias