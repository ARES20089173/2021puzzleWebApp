import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from './img/1.JPG'
import pic2 from './img/2.JPG'
import pic3 from './img/3.JPG'
class App extends Component {

    render() {
        return (
            <div className="carousel-wrapper">
                <Carousel infiniteLoop width={"100%"} emulateTouch showStatus={false} autoPlay swipeable showThumbs={false} dynamicHeight> 
                    <div>
                        <img src={pic3} alt="ab" />
                    </div>
                    <div>
                        <img src={pic2} alt="abc" />
                    </div>
                    <div>
                        <img src={pic3} alt="abd" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default App