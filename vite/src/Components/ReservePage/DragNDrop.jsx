import { useRef, useState } from "react"

const DragNDrop = () => {
    const [testItems, setTestItems] = useState(
        ['Apple', 'Orange', 'Banana']
    )

    // Save reference for dragItem and dragOverItem
    const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    // const handle drag sorting
    const handleSort = () => {
        // duplicate items
        let _testItems = [...testItems]

        // remove and save the dragged item content
        const draggedItemContent = _testItems.splice(dragItem.current, 1)[0]

        // switch the position
        _testItems.splice(dragOverItem.current, 0, draggedItemContent)

        // reset the position ref
        dragItem.current = null
        dragOverItem.current = null

        // update the actual array
        setTestItems(_testItems)
        console.log(testItems)
    }

    // handle drag End
    const onDragEnd = (e) => {
        console.log('drag end')
    }

    const item = testItems.map((item, idx) => {
        return (
            <div
                className="list-item"
                draggable
                onDragStart={(e) => {
                    dragItem.current = idx
                }}
                onDragEnter={(e) => {
                    dragOverItem.current = idx
                }}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}
                key={idx}>
                <h3>{item}</h3>
            </div>
        )
    })

    return (
        <div className="list-container">
            {item}
        </div>
    )
}

export default DragNDrop