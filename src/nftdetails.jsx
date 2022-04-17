import React from 'react'; 
import {TextStyle} from '@shopify/polaris';
// import { createAlchemyWeb3 } from '@alch/alchemy-web3'; 
// import {getNFTsMetadata} from './fetchNFTs';

function Nftdetails() {

  const url = window.location.href; 
  const address = url.slice(url.indexOf('nft/') + 4, url.lastIndexOf('/')); 
  const id = url.split("/").pop(); 

  // const test = async () => {
  //   getNFTsMetadata(address, id)
  // }

  // const response = await web3.alchemy.getNftMetadata({
  //   contractAddress: address, 
  //   tokenId: id
  // })

  // console.log(metadata); 

  return(
    <>
      <TextStyle>{address}</TextStyle>
      <br></br>
      <TextStyle>{id}</TextStyle>
    </>
  );
};

      
export default Nftdetails;