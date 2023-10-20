import React from "react";
import "./index.css";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Protected from "./components/Protected";
import Home from "./components/Home";
import ChatBoot from "./components/ChatBoot";
import AdminChats from "./components/AdminChats";
function App() {

  return (
    <>
    {/* <ChatBoot/> */}
      <BrowserRouter>
          <Routes>
            <Route element={<Header/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="signUp" element={<SignUp/>} />
              <Route element={<Protected/>}>
                <Route path='/' element={<Home/>}>
                  <Route path='/' element={<h1>Hola mundo</h1>}/>
                  <Route path='/chatBOT' element={<ChatBoot/>}/>
                  <Route path='/HistoryChat' element={<AdminChats/>}/>
                </Route>
              </Route>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
