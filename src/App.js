import React, { Component } from 'react';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import ServicesPage from './Pages/ServicesPage';
import TestimonialPage from './Pages/TestimonialPage';
import BlogPage from './Pages/BlogPage';
import ContactUsPage from './Pages/ContactUsPage';
import GalleryPage from './Pages/GalleryPage';
import Login from './Pages/loginPage'
import Signup from './Pages/SignupPage';
import ExplorePage from './Pages/ExplorePage';
import Books from './Components/Gallery/Books';
import Blog1 from './Components/Blogs/Blog1';
import Blog2 from './Components/Blogs/Blog2';
import Blog3 from './Components/Blogs/Blog3';
// import AuthProvider from './contexts/AuthContext';

const App = () => {
  return (
    <>
      {/* <AuthProvider> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/books' element={<Books />} />
        <Route path='/blogs/reading-of-printed-books' element={<Blog1 />} />
        <Route path='/blogs/now-you-can-be-a-published' element={<Blog2 />} />
        <Route path='/blogs/now-you-can-be-a-published-in-a-few-days' element={<Blog3 />} />
      </Routes>
      {/* </AuthProvider> */}
    </>
  );
}


// Randogm change

export default App;
