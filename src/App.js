import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
    url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_touching_human_hand_other/1800x1200_cat_touching_human_hand_other.jpg'
  },
  {
    name: 'photp 2',
    url: 'https://images.theconversation.com/files/243451/original/file-20181101-83629-pq6hc7.jpg?ixlib=rb-1.1.0&rect=48%2C409%2C5358%2C2679&q=45&auto=format&w=668&h=324&fit=crop'
  },
  {
    name: 'photp 3',
    url: 'https://images.ctfassets.net/cnu0m8re1exe/7sLmeD1tcL4UoIm0BjNaLh/22a9f42a4315361db96470f50b178e86/Dog-and-Cat.jpg?w=650&h=433&fit=fill'
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
      className: "slides"
    };
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

export default App;
