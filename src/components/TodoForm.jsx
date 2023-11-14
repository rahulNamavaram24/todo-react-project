import { useState } from 'react'
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
    const [priority, setPriority] = useState("high");

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;

        addTodo({ todo, completed: false, priority });
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <select
                    placeholder='priority..'
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border outline-none bg-black  px-3 py-1.5"
                >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button
                    type="submit"
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default TodoForm
