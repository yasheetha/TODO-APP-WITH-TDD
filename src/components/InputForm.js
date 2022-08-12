import React, { useState } from "react";


function Form(props) {

 const [name,setName]=useState('');

 function SubmitAction(e){
 e.preventDefault(); 
 if(name===""){
  alert("task shouldn't be empty");
  }
  else{
  props.addTask(name);
  }
  setName("");
 }


function handleChange(e){
setName(e.target.value);
}


  return (
    <form data-testid="input-form" onSubmit={SubmitAction} >
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        data-testid = "input-textbox"
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
	value={name}
	onChange={handleChange}
      />
      <button data-testid="add-button" type="submit" className="btn btn__primary btn__lg" onClick={SubmitAction}>
        Add
      </button>
    </form>
  );
}

export default Form;

