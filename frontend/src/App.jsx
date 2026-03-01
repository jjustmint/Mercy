import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';


import Home from './pages/Home';
import AdoptPet from './pages/AdoptPet';
import MercyFound from "./pages/MercyFound";
import Donation from "./pages/Donation";
import Dog from './pages/Dog';
import DogBreeds from "./pages/DogBreeds";
import Cat from './pages/Cat';
import CatBreeds from "./pages/CatBreeds";
import Other from './pages/Other';
import Voluteer from './pages/Voluteer';
import Login from './pages/Login';
import Register from './pages/Register';



const App = () => {
  
  return (
    <Box m="auto" id="box1">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/adoptPet" element={<AdoptPet />} />
          <Route path="/mercyFound" element={<MercyFound />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/dogBreeds" element={<DogBreeds />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/catBreeds" element={<CatBreeds />} />
          <Route path="/other" element={<Other />} />
          <Route path="/voluteer" element={<Voluteer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App
