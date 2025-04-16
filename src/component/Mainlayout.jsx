import Header from "./header";
import { Outlet } from "react-router-dom";




export default function Mainlayout() {
    return (
        <>
            <Header />
            <Outlet />

        </>
    )
}