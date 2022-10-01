import { Route, Routes } from "react-router-dom"
import ReserveNav from "./ReserveNav"

const ReservePage = () => {
    return (
        <>
            <ReserveNav />
            <Routes>
                <Route path="reservation/hall" />
                <Route path="reservation/2ndFloor" />
                <Route path="reservation/terrace" />
            </Routes>
        </>
    )
}

export default ReservePage