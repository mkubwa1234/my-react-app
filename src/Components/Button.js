import React from "react";
function Button({ id, onDelete }) {
    function handleClick() {
        fetch (`http://localhost:4001/bots/${id}`,{
            method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        onDelete(id);
    })
    .catch(error => {
        console.error('Error deleting bot:', error);
    });
    }
    return(
        <button onClick={handleClick} className="btn btn-danger">X</button>
    );
}
export default Button;