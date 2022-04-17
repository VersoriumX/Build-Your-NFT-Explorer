import React, {useState} from 'react';
import NftCard from './nftcard';
import {fetchNFTs} from './fetchNFTs';
import {Button, Stack, AppProvider, Page, Form, FormLayout, TextField} from '@shopify/polaris';
import {Masonry} from '@mui/lab';

function Home() {
  const [owner, setOwner] = useState("")
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState([])

  const getNFTs = async () => {
    fetchNFTs(owner, contractAddress, setNFTs)
  }

	return (
    <>
      <Form onSubmit={getNFTs}>
        <FormLayout>
          <TextField
            value={owner}
            onChange={setOwner}
            label="Wallet address"
            type="text"
          />
          <Button submit>Submit</Button>
          <br />
        </FormLayout>
      </Form>
    
      <Masonry columns={4} spacing={3}>
        {NFTs ? NFTs.map(NFT =>(    
           <NftCard 
             key={NFT.value.id + NFT.value.contractAddress} 
             image={NFT.value.image} 
             id={NFT.value.id} 
             title={NFT.value.title} 
             description={NFT.value.description} 
             address={NFT.value.contractAddress} 
             attributes={NFT.value.attributes}
           />
        )) : null}
      </Masonry>
    </>
	);
};

export default Home; 