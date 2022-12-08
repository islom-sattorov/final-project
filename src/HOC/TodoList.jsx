import HOC from "./HOC"

const TodoList = ({ data }) => {
    // const [todos, setTodos] = useState([]);
    // const [term, setTerm] = useState('');

    // useEffect(() => {
    //     const fetchTodos = async () => {
    //         try {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    //             const json = await res.json();
    //             setTodos(json)
    //             console.log(todos)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchTodos();
    // }, [])

    let renderedTodos = data.map((todo) => (
        <div key={todo.id}>
            <h2>{todo.title}</h2>
        </div>
    ))


    // let filteredTodos = todos && todos.filter(({ title }) => {
    //     return title.indexOf(term) >= 0;
    // })
    //     .slice(0, 10)
    //     .map((todo) => (
    //         <div key={todo.id}>
    //             <div>{todo.title}</div>
    //         </div>
    //     ))

    return (
        <>
            {/* <div>
                <input
                    type="text"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                /> */}
            {renderedTodos}
            {/* </div> */}
        </>
    )
}

const SearchTodos = HOC(TodoList, "todos")

export default SearchTodos