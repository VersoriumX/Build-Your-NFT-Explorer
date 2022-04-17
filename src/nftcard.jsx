import React from 'react'; 
import {MediaCard, Subheading, TextStyle, TextContainer, Link} from '@shopify/polaris';

const NftCard = ({image, id, title, address, description: descriptionString, attributes}) => {

  const description = (
    <TextContainer>
      <Subheading>
        {`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}
      </Subheading>
      <Link url={`https://etherscan.io/token/${address}`}>    
        {`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}          
      </Link>
    </TextContainer>
  )

  const decimalId = parseInt(id, 16); 

  
  return(
    <MediaCard 
      portrait 
      title={title}
      primaryAction={{
          content: 'Details',
          url: `/nft/${address}/${decimalId}`
        }}
      description={description}
      size="small"
    >
      
      <img 
        alt=""
        width="100%"
        height="100%"
        style={{ objectFit: 'cover', objectPosition: 'center',}}
        
        src={image}
      />
    </MediaCard> 
  ); 
}
      
export default NftCard;