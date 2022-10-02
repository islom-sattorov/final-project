import { Route, Routes } from "react-router-dom"
import Hall from "./Hall"
import ReserveNav from "./ReserveNav"
import Terrace from "./Terrace"

const ReservePage = () => {
    return (
        <>
            <ReserveNav />
            <Routes>
                <Route path="reservation/hall" element={<Hall />} />
                <Route path="reservation/terrace" element={<Terrace />} />
            </Routes>
        </>
    )
}

export default ReservePage