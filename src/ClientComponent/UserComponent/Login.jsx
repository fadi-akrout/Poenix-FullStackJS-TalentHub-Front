import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderClient from '../Dashboard/HeaderClient';
import Footer from '../Dashboard/Footer';

const Login = () => {
  return (
    <>
    <HeaderClient />
    <section className="upcoming-meetings" id="meetings">
        <div className="container my-5">
            <h1 className="text-center mb-4 text-secondary">Login</h1>
            
        </div>
    <Footer />
    </section>
        </>
  )
   
}

export default Login