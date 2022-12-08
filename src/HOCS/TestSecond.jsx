import { compose } from "@reduxjs/toolkit";

const TODOS = [
    { id: "1", task: 'Do this', complete: true },
    { id: "2", task: 'Do this', complete: false }
]

// Suppose the data todos coming from a api fetch
const fetchData = () => {
    return { data: TODOS, isLoading: false, isError: false }
}

const withConditionalFeedback = (Component) => (props) => {
    if (props.isLoading) return <div>Loading...</div>
    if (props.isError) return <div>Fetching is failed</div>
    if (!props) return <div>No data loaded</div>
    if (!props.length) return <div>Data is empty</div>
    return <Component {...props} />
}

const TestSecond = () => {
    const { data, isLoading, isError } = fetchData();
    console.log(data)
    // if (isLoading) return <div>Loading...</div>
    // if (error) return <div>Fetching is failed</div>
    // if (!data) return <div>No data loaded</div>
    // if (!data.length) return <div>Data is empty</div>

    return <BaseTodoList data={data} isLoading={isLoading} isError={isError} />
}

const BaseTodoList = ({ data }) => {
    return (
        <ul>
            {data?.map((item) => (
                <TodoItem key={item.id} item={item.task} />
            ))}
        </ul>
    )
}

const TodoItem = withConditionalFeedback(BaseTodoList)

// const TodoItem = ({ item }) => {
//     return (
//         <li>{item.task} {item.completed.toString()}</li>
//     )
// }
export default TestSecond

// HOF
const multiply = (multiplier) => (multiplicand) => multiplicand * multiplier
const product = multiply(3)(4);
console.log(product)

const substract = (minued) => (subtrahed) => minued - subtrahed
const result = compose(substract(2), multiply(4))(3)
console.log(result)


const withHigherOrderComponent = (Component, configuration) => (props) => <Component {...props} />