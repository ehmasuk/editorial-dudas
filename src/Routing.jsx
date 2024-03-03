import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Error404 from "./pages/error/Error404";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function Routing() {
    const { isLogedin } = useSelector((store) => store.AuthCheckerSlice);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={
                        <PrivateRoute isLogedin={!isLogedin}>
                            <Login />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <PrivateRoute isLogedin={!isLogedin}>
                            <Register />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
