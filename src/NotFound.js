import { Link } from "react-router-dom";
const NotFound = () =>{
    return(
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page Cannot be found</p>
            <Link to="/">Back to the homepahe...</Link>
        </div>
    )
}

export default NotFound;