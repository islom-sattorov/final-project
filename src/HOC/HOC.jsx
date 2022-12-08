import { useEffect } from "react";

export const HOC = (WrappedComponent) => (entity) => {
    try {
        const state = {
            data: [],
            term: "",
        }

        let { data, term } = state;

        let filteredData = data.slice(0, 10).filter((d) => {
            switch (entity) {
                case "user":
                    const { name } = d;
                    name.indexOf(term) >= 0
                    break;
                case "todos":
                    const { title } = d;
                    title.indexOf(term) >= 0;
            }
        })

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch(
                        `https://jsonplaceholder.typicode.com/${entity}`
                    )
                    const json = await res.json();
                    set`${state.data}`({ ...state, data: json })

                } catch (err) {
                    console.log(err)
                }
            }
            fetchData()
        }, [])
    } catch (err) {
        console.log(err)
    }

    return (
        <div>
            <h2>{entity}</h2>
            <input
                type="text"
                value={term}
                onChange={(e) => set`${state.term}`({ ...state, term: e.target.value })}
            />
            <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
    )
}

export default HOC
