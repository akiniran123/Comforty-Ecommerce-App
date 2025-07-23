import { BrowserRouter, Route, Routes } from "react-router-dom"; // Sửa ở đây
import Navbar from './../Components/Navbar/Navbar';
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <BrowserRouter>
            {/* Navbar */}
            <Navbar />

            <Routes>
                <Route 
                    path="/" 
                    element={
                        <AuthCheck>
                            <Home />
                        </AuthCheck>
                    } 
                />
                <Route path="auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Not found routes */}
                <Route path="*" element={<Error />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    );
};

export default MainLayout;
