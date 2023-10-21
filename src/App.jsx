import React from "react";
import "./index.css";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Protected from "./components/Protected";
import Home from "./components/Home";
import ChatBoot from "./components/ChatBoot";
import AdminChats from "./components/AdminChats";
import ContactUser from "./components/ContactUser";
import RegresionL from "./components/RegresionL";
import AdminContact from "./components/AdminContact";
function App() {
  return (
    <>
          <Routes>
            <Route element={<Header/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="signUp" element={<SignUp/>} />
              <Route element={<Protected/>}>
                <Route path='/' element={<Home/>}>
                  <Route path='/' element={<RegresionL/>}/>
                  <Route path='/chatBOT' element={<ChatBoot/>}/>
                  <Route path='/HistoryChat' element={<AdminChats/>}/>
                  <Route path='/ContactSuport' element={<ContactUser/>}/>
                  <Route path='/HistoryContact' element={<AdminContact/>}/>
                </Route>
              </Route>
            </Route>
          </Routes>
    </>
  );
}

export default App;
