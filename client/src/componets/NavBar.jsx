
import React from "react";
import "./NavBar.css"


const NavBar = (props) => {
	return (
		<React.Fragment>
			<div className="nav_div">
				<div className="row">
				<nav className="col-lg-12">
					<ul className="navbar">
						<li className="mr-auto"><h6>Almacenamiento y gestión de la información</h6></li>
						
						<li>Estaciones APP</li>
					</ul>
				</nav>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
