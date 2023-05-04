import React, { Component, useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Navbar from './component/Navbar'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home'
import Adoption from './component/Adoption'
import Help from './component/Help';
import Footer from './component/Footer';
import Book from './component/Book';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import history from './component/history';



const photos = [
  {
    name: 'photp 1',
    url: 'https://www.fetchpetcare.com/wp-content/uploads/2016/11/dreamstime_xxl_87694876.jpg'
  },
  {
    name: 'photp 2',
    url: 'https://www.uah.edu/images/administrative/human-resources/charger_fit/cutest-pet-header.jpg'
  },
  {
    name: 'photp 3',
    url: 'https://i0.wp.com/almosthomeanimals.org/wp-content/uploads/2013/06/header.jpg?ssl=1'
  }
]


class App extends Component {

  render(){
    const settings = {
      dots: true,
      infinite: true,
      fade:true,
      speed: 500,
      arrows:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"};

    return (
      <BrowserRouter history={history}>
        <div className="App">
        <Navbar />
          <Slider {...settings}>
          {photos.map((photo) => {
            return(
              <div>
                <img width="100%" height="400px" src={photo.url}/>
              </div>
            )
          })}
          </Slider>
            <Route exact path='/' component={Home} />
            <Route path='/adoption' component={Adoption} />
            <Route path='/help' component={Help} />
            <Route path='/book' component={Book}/>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App
