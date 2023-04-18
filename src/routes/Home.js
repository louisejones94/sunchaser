import {Link} from "react-router-dom";

export default function Home () {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to SunChaser!</p>
            <p>Ready to search?</p>
            <Link to="/search">Search</Link>
        </div>
    )
}