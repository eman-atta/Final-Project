import React from 'react';
import {Layout, Landing} from '../pages';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/AboutUs'
import Contact from '../pages/ContactUs'
import SigninPage from '../pages/SigninPage'
import SignupPage from '../pages/SignupPage'
import ProfilePages from '../pages/ProfilePages'
import Details from '../pages/Details'
import Search from '../pages/Search'
import Houses from '../pages/Houses'
import AddHouse from '../pages/AddHouse'





function App() {
  return (
    <Layout className="App">

          <Routes>

     <Route path='/' element={ <Landing/>}/>

     <Route path='/aboutus' element={ <About/>}/>

     <Route path='/contactus' element={ <Contact/>}/>
     <Route path='/SigninPages' element={ <SigninPage/>}/>
     <Route path='/SignupPages' element={ <SignupPage/>}/>
     <Route path='/ProfilePages' element={ <ProfilePages/>}/>
     <Route path={`/Details/:id`} element={<Details/>}/>
     <Route path='/Search' element={<Search/>}/>
     <Route path='/Houses' element={<Houses/>}/>
     <Route path='/AddHouse' element={<AddHouse/>}/>



              </Routes>
   
    </Layout>
  );
}

export default App;

