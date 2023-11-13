import { Outlet } from "react-router-dom";

import Banner from "components/Banner/Banner";

export default function LayoutDefault() {
    return (
        <>
            <Banner></Banner>
            <Outlet></Outlet>
        </>
    )
}