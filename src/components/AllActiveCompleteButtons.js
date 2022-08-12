import React, { useState } from "react";
 
export default function Buttons(props){
return (

	<button data-testid="buttons" name={props.name} type="button" className="btn toggle-btn" aria-pressed={props.aria_pressed} onClick={()=>props.setFilter(props.name)} >
		<span>{props.name}</span>
	</button>
);
}

