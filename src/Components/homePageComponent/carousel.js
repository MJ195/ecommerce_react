import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from '../../Assets/images/carousel images/image1.jpg';
import img2 from "../../Assets/images/carousel images/image2.webp";
import img3 from "../../Assets/images/carousel images/image3.jpg";
import img4 from "../../Assets/images/carousel images/image4.jpg";
import img5 from "../../Assets/images/carousel images/image5.webp";
//  for mobile view
import m1 from "../../Assets/images/mobileView/categories/img1.webp"
import m2 from "../../Assets/images/mobileView/categories/img2.webp"
import m3 from "../../Assets/images/mobileView/categories/img3.webp"
import m4 from "../../Assets/images/mobileView/categories/img4.webp"
import m5 from "../../Assets/images/mobileView/categories/img5.webp"
import m6 from "../../Assets/images/mobileView/categories/img6.webp"
import m7 from "../../Assets/images/mobileView/categories/img7.webp"
import m8 from "../../Assets/images/mobileView/categories/img8.webp"


// import {makeStyles} from '@material-ui/core';
// const useStyles=makeStyles((theme)=>({
//     carousel:{
//         height:'70vh',
//     }
// }))

const CarouselComponent = (props) => {
    const mobile = [m1, m2, m3, m4, m5, m6, m7, m8];
    const images = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
        {
            image: img5,
        },
    ];  
 
//  const classes = useStyles();
   
    return (
        <div style={{ marginTop: '3%', width: '100%', maxHeight: '60vh' }}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showIndicators dynamicHeight={false} >
                {images.map((item) => (
                    <div>
                        <img src={item.image} style={{ height: '60vh' }} />
                    </div>
                ))
                }
            </Carousel>
            {/* <Carousel
         swipeable={false}
         draggable={false}
         showDots={true}
         responsive={responsive}
         ssr={true} // means to render carousel on server-side.
         infinite={true}
        //  autoPlay={this.props.deviceType !== "mobile" ? true : false}
         autoPlaySpeed={1000}
         keyBoardControl={true}
         customTransition="all .5"
         transitionDuration={500}
         containerClass="carousel-container"
         removeArrowOnDeviceType={["tablet", "mobile"]}
        //  deviceType={this.props.deviceType}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
            >
                {mobile.map((item) => (
                    <div>
                        <img src={item} style={{ width:60}} />
                    </div>
                ))

                }
            </Carousel> */}

        </div>
    )

}
export default CarouselComponent;