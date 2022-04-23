import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />
            
            <Footer />
            <Modal />
        </>

    );
}

export default Layout;