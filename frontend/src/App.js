import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Homepage } from './pages/Homepage';




function App() {



    return (
        <BrowserRouter>
       
            <header>
                <Nav />
            </header>

            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>

        </BrowserRouter> 


           

        



    );
}

export default App;
