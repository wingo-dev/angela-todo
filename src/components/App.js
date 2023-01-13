import React, { useState } from 'react';
import Items from './Items';
function App() {
    const [lists, setList] = useState([]);
    const [todo, setTodo] = useState('milk');

    function handleChange(e) {
        const new_todo = e.target.value;
        setTodo(new_todo);
    }

    function handleClick() {
        setList((prev) => {
            return [...prev, todo]
        });
        setTodo('');
        // console.log(lists);
    }

    return (
        <div className="container">
            <div>
                <h1>To Do</h1>
                <hr></hr>
                <form>
                    <input type="text" name="todo" onChange={handleChange} />
                    <button type="button"
                        onClick={handleClick}
                    >Add</button>
                    <hr></hr>
                    <ul>
                        <Items
                            items={lists}
                        />
                    </ul>
                </form>
            </div>
        </div>
    )
}


export default App;