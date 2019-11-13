import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="main">
      <div className="row movie flex-row-reverse" id="monsoon">
        <div className="sidetext col-lg">
          <h4>MONSOON III</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Id interdum velit laoreet id donec ultrices tincidunt. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. </span>
        </div>
        <img className="col-lg" src="https://i.vimeocdn.com/video/595198868_505x160.jpg" alt="Monsoon III Image"></img>
      </div>
      <div className="row movie" id="beams">
        <div className="sidetext col-lg">
          <h4>Beams</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Id interdum velit laoreet id donec ultrices tincidunt. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius.</span>
        </div>
        <img className="col-lg" src="https://i.vimeocdn.com/video/589972810_530x315.jpg" alt="Beams Image"></img>
      </div>
      <div className="row movie flex-row-reverse" id="move">
        <div className="sidetext col-lg">
          <h4>Move 2</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
             Id interdum velit laoreet id donec ultrices tincidunt. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. </span>
        </div>
        <img className="col-lg" src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="Move 2 Image"></img>
      </div>
      <Carousel showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
        <div className="row carouselItem">
          <img className="col" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/hunt-for-the-wilderpeople-poster.jpg?itok=vKoeU0_V"></img>
          <div className="col align-self-center">
            <h5 className="">Hunt for the Wilderpeople</h5>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="btn btn-primary">Buy Now</a>
            <a href="#" className="btn btn-outline-dark">Watch Trailer</a>
          </div>
          <p className="legend hide">Legend 1</p>
        </div>
        <div className="row carouselItem">
          <img className="col" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-tv/the-mandalorian-tv-poster-image.jpg?itok=ZZlgNxZm"></img>
          <div className="col align-self-center">
            <h5 className="">Mandalorian</h5>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="btn btn-primary">Buy Now</a>
            <a href="#" className="btn btn-outline-dark">Watch Trailer</a>
          </div>
          <p className="legend hide">Legend 2</p>
        </div>
        <div className="row carouselItem">
          <img className="col" src="https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/ford-v-ferrari-movie-poster-image.jpg?itok=sexVOCwO"></img>
          <div className="col align-self-center">
            <h5 className="">Ford v Ferrari</h5>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="#" className="btn btn-primary">Buy Now</a>
            <a href="#" className="btn btn-outline-dark">Watch Trailer</a>
          </div>
          <p className="legend hide">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
