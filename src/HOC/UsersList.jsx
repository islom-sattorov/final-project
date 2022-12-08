import HOC from "./HOC"

const UsersList = ({ data }) => {
    // const [users, setUsers] = useState([]);
    // const [term, setTerm] = useState('');

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //             const json = await res.json();
    //             setUsers(json)
    //             console.log(users)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchUsers();
    // }, [])

    let renderedUsers = data.map((user) => (
        <div key={user.id}>
            <h2>{user.name}</h2>
        </div>
    ))


    // let filteredUser = users && users.filter(({ name }) => {
    //     console.log(name.indexOf(term))
    //     return name.indexOf(term) >= 0;
    // }).map((user, i) => (
    //     <div key={i}>
    //         <div>{user.name}</div>
    //     </div>
    // ))

    return (
        <div>
            {renderedUsers}
        </div>
    )
}

const SearchUsers = HOC(UsersList, "users")

export default SearchUsers