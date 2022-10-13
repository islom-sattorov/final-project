import { useEffect, useRef, useState } from "react";

const Ref = () => {
    const [name, setName] = useState('')
    const renderCount = useRef(0)
    const inputRef = useRef()

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    // Infinitive Loop
    // const [renderCount, setRenderCount] = useState(0)
    // useEffect(() => {
    //     setRenderCount(prev => prev + 1)
    // })

    function focus() {
        inputRef.current.focus();
        inputRef.current.value = 'Some Value'
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}

export default Ref

