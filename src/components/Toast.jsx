import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {

    return (
        <div>
            <ToastContainer position="bottom-right" autoClose={1000} theme='dark' />
        </div>
    );
}

export default Toast