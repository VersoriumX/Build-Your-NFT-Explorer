import React, {useState} from 'react';
import NftCard from './nftcard';
import {fetchNFTs} from './fetchNFTs';
import {Button, Stack, AppProvider, Page, Form, FormLayout, TextField} from '@shopify/polaris';
import {Masonry} from '@mui/lab';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nftdetails from './nftdetails';
import Home from './home'; 

// Dame's 
// 0x3B3525F60eeea4a1eF554df5425912c2a532875D
// Mine 
// 0xE2FE20e03663D9f710Bf881A2774A1d447bDae2a


function App() {
  
  return (
    <AppProvider colorScheme="light">
      <Page 
        title="Justina's React NFT App"
        subtitle="Find NFTs within a wallet address here!"
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nft/:contract/:token" element={<Nftdetails />} />          
          </Routes>
        </Router>
  
      </Page>
    </AppProvider>
  )
}

export default App;
