import { Navigate } from "react-router-dom";

function PrivateRoute({ isLogedin, children }) {
    console.log(isLogedin);
    if (isLogedin) {
        return children;
    } else {
        return <Navigate to="/" replace />;
    }
}

export default PrivateRoute;
