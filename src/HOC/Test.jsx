import React from 'react'
import SearchTodos from './TodoList'
import SearchUsers from './UsersList'

const Test = () => {
    return (
        <>
            <h2>Higher order component</h2>
            <div>
                <SearchUsers />
            </div>
            <div>
                <SearchTodos />
            </div>
        </>
    )
}

export default Test