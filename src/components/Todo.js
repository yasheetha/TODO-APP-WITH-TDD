import React, {useRef, useEffect, useState} from "react";

export function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default function Todo(props) {

const [isEditing, setEditing] = useState(false);

const [newName, setNewName] = useState("");

const wasEditing = usePrevious(isEditing);

const editFieldRef = useRef(null);
const editButtonRef = useRef(null);

function handleSubmit(e){
e.preventDefault();

props.editTask(props.id,newName);

setNewName("");
setEditing(false);
}

function handleChange(e){
setNewName(e.target.value);
}

const editingTemplate = (
  <form className="stack-small" onSubmit={handleSubmit} >
    <div className="form-group">
      <label className="todo-label" htmlFor={props.id}>
        New name for {props.name}
      </label>
      <input data-testid="new-textbox" id={props.id} className="todo-text" type="text" value={newName} onChange={handleChange} ref={editFieldRef} />
    </div>
    <div className="btn-group">
      <button data-testid="cancel-button" type="button" className="btn todo-cancel" onClick={()=>setEditing(false)} >
        Cancel
        <span className="visually-hidden">renaming {props.name}</span>
      </button>
      <button data-testid="save-button" type="submit" className="btn btn__primary todo-edit"  >
        Save
        <span className="visually-hidden">new name for {props.name}</span>
      </button>
    </div>
  </form>
);
const viewTemplate = (
  <div data-testid="list" className="stack-small">
    <div data-testid="sublist-checkbox" className="c-cb">
        <input
          data-testid="checkbox"
          id={props.id}
          type="checkbox"
          defaultChecked={props.checked}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label data-testid="task-name" className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div data-testid="sublist-buttons" className="btn-group">
        <button data-testid="edit-button" type="button" className="btn" onClick={()=>setEditing(true)} ref={editButtonRef}  >
          Edit 
        </button>
        <button
          data-testid="delete-button"
          type="button"
          className="btn btn__danger"
          onClick={() => props.removeTask(props.id)}
        >
          Delete 
        </button>
      </div>
  </div>
);

useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  }
  if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);


return (<li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>);
}
