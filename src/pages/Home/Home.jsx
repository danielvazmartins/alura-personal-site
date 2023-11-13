import { useLocation } from "react-router-dom";

export default function Home() {
    const location = useLocation()
	console.log(location)

    return (
        <h1>Home</h1>
    )
}