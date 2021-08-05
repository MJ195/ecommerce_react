import React from 'react';
import { Button } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import R1 from "../Assets/images/shirts/1/R1.webp";
import R2 from "../Assets/images/shirts/1/R2.webp";
import R3 from "../Assets/images/shirts/1/R3.webp";
import R4 from "../Assets/images/shirts/1/R4.webp";
import R5 from "../Assets/images/shirts/1/R5.webp";
import R6 from "../Assets/images/shirts/1/R6.webp";

const ShirtCarousel = (props) => {

    return (
        <Carousel autoPlay infiniteLoop showArrows={false} showStatus={false} showThumbs={false} showIndicators={true} interval={1000} stopOnHover={false} dynamicHeight={false}>
            {props.images.map((item) => (
                <div>
                    <img src={item} style={{ maxWidth: 250, width: '100%', height: '100%', maxHeight: 300, display: 'block', objectFit: 'fill' }} />

                </div>
            ))
            }



        </Carousel>
    )

}
export default ShirtCarousel;