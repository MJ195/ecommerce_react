import React from 'react';
import { Carousel, Thumbs } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { makeStyles } from '@material-ui/core';
// importing Ad component and image:
import Ads from './ads';
import ad from "../../Assets/images/mobileView/ads/ad2.jpg"

// Carouse 1 images
import C1 from "../../Assets/images/mobileView/offersCarousel/carousel/C1.webp";
import C2 from "../../Assets/images/mobileView/offersCarousel/carousel/C2.webp";
import C3 from "../../Assets/images/mobileView/offersCarousel/carousel/C3.webp";
import C4 from "../../Assets/images/mobileView/offersCarousel/carousel/C4.webp";
import C5 from "../../Assets/images/mobileView/offersCarousel/carousel/C5.webp";
import C6 from "../../Assets/images/mobileView/offersCarousel/carousel/C6.webp";
// Carousel 2 images
import Cr1 from "../../Assets/images/mobileView/offersCarousel/carousel2/C1.webp";
import Cr2 from "../../Assets/images/mobileView/offersCarousel/carousel2/C2.webp";
import Cr3 from "../../Assets/images/mobileView/offersCarousel/carousel2/C3.webp";
import Cr4 from "../../Assets/images/mobileView/offersCarousel/carousel2/C4.webp";

// const useStyles=makeStyles((theme)=>({
//     carousel:{
//         height:'50vh',
//     }
// }))

const Offers = () => {
    // const classes = useStyles();
    const carousel = [
        {
            image: C1
        },
        {
            image: C2
        },
        {
            image: C3
        },
        {
            image: C4
        },
        {
            image: C5
        },
        {
            image: C6
        },
    ];
    const carousel2 = [
        {
            image: Cr1
        },
        {
            image: Cr2
        },
        {
            image: Cr3
        },
        {
            image: Cr4
        },
      
    ]
 
    return (
        <div style={{marginBottom:50}}  >
            {/* carousel */}
            <div style={{marginBottom:30, height: 400 }}>
                <Carousel style={{ width: '100%'}} infiniteLoop  autoPlay showIndicators showStatus={false} showThumbs={false} showArrows={false}>
                    {carousel.map((item) => (
                        <div style={{  marginTop: 0 }}>
                            <img src={item.image} style={{ width: '100%', height: 400 }} />
                        </div>
                    ))
                    }
                </Carousel>
            </div>
            <Ads image={ad}/>
            <div style={{marginTop:0, height: 400 }}>
                <Carousel style={{ width: '100%', height: 300 }} infiniteLoop  autoPlay showIndicators showStatus={false} showThumbs={false} showArrows={false}>
                    {carousel2.map((item) => (
                        <div style={{ borderTop: '15px solid #eee', marginTop: 0 }}>
                            <img src={item.image} style={{ width: '100%', height: 400 }} />
                        </div>
                    ))
                    }
                </Carousel>
            </div>

        </div>
    )
}
export default Offers;