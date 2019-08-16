import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Getdata extends React.Component
{
	
	
	function Req(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("scripting").innerHTML= this.responseXML;
															}
										}
	xhttp.open("GET", "https://api.enterprise.apigee.com/v1/organizations/nishantpal77-eval/environments/prod/deployments", true,"nishantpal77@gmail.com","Nishu@111");
	xhttp.send();		
	};
	
	
	
	render()
	{
		
		
		return <Req/>;
	}
	
	
}


ReactDOM.render(<Getdata/>, document.getElementById('script'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
