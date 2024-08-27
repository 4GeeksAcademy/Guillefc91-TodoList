import React, { useState } from "react";

export const TodoList = () => {
    const [items, setItems] = useState("");
    const [list, setList] = useState([]);

    const handleItem = (event) => {
        setItems(event.target.value);
    }

    const handleList = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setList([...list, items]);
            setItems(""); // Limpiar el campo de entrada
        }
    }

    const handleDelete = (index) => {
        const newList = list.filter((item, i) => i !== index);
        setList(newList);
    }

    return (
        <div className="container col-6">
            <h1>My List</h1>
            <input
                onChange={handleItem}
                onKeyDown={handleList}
                type="text"
                className="form-control"
                placeholder="Add a new task"
                aria-label="Task"
                aria-describedby="basic-addon1"
                value={items}
            />
            <ul className="list-group text-start">
                {list.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {item}
                        <i 
                            className="fas fa-trash-alt" 
                            style={{ cursor: "pointer" }} 
                            onClick={() => handleDelete(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}