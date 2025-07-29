import { Link } from "react-router"

function PageNotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Page Not Found</h1>
            <div>
                <Link to="/">Go to Home Page</Link>
            </div>
            <img style={{ width: '60%' }} src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png" alt="current image does not exist" />
        </div>
    )
}

export default PageNotFound