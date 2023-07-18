import React from 'react';
import { Helmet } from 'react-helmet';
import { FacebookShareButton, WhatsappShareButton } from 'react-share';
import {FacebookIcon, WhatsappIcon} from "react-share"

const Sharecomponent = () => {
    const url = window.location.href;
    const title = 'its my first blog for share';
    const description = 'lets make a better world together';
    const imageurl = 'https://plus.unsplash.com/premium_photo-1668116307088-583ee0d4aaf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80';
  
    return (
      <>
      <div className='boxstyle'>
  <div className='image style'>
    who are you
    <img src={imageurl} alt='image' />
  </div>
</div>
        <Helmet>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageurl} />
        </Helmet>
        <div>
          <FacebookShareButton 
          url={url}
          quote={title}
          hashtag="#shareit"
          imageurl={imageurl}
          >
            <FacebookIcon lightingColor="white" round = {true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton 
          url={url}
          quote={title}
          hashtag="#shareblog"
          imageurl={imageurl}
          >
            <WhatsappIcon lightingColor="white" round = {true}></WhatsappIcon>
          </WhatsappShareButton>
        </div>
      </>
    );
  };
  
  export default Sharecomponent;
 