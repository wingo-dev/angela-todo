import React, { useState } from 'react';
import Items from './Items';

function App() {
    const [lists, setList] = useState([]);
    const [todo, setTodo] = useState('');
    const [isDone, setDone] = useState([]);

    function handleChange(e) {
        const new_todo = e.target.value;
        setTodo(new_todo);
    }

    function handleClick(e) {
        e.preventDefault();
        setList((prev) => {
            return [...prev, todo]
        });
        setTodo('');
        // console.log(lists);
    }
    function deleteItem(id) {
        setList(prevs => {

            return prevs.filter(
                (list, index) => {
                    return index !== id;
                }
            )
        });

    }

    function lineThrough(id) {
        setDone(
            prev => {
                return prev.filter(
                    (d, index) => {
                        return index !== id;
                    }
                )
            }
        );
        console.log(isDone);
    }
    return (
        <div className="container">
            <div>
                <h1>To Do</h1>
                <hr></hr>
                <form>
                    <input type="text" name="todo" value={todo} onChange={handleChange} />
                    <button type="button"
                        onClick={handleClick}
                    >Add</button>
                    <hr></hr>
                    <ul>
                        {
                            lists.map((list, index) => {
                                return <Items
                                    key={index}
                                    id={index}
                                    text={list}
                                    onDelete={deleteItem}
                                    onDone={lineThrough}
                                    done={isDone}
                                />
                            })
                        }

                    </ul>
                </form>
            </div>
        </div>
    )
}

export default App;