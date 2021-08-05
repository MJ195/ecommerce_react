import React from 'react'; 
import {Typography} from '@material-ui/core';
// owl carouse
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// **owl  carousel
// images
import S1 from "../../Assets/images/mobileView/offersSliders/S1.webp"
import S2 from "../../Assets/images/mobileView/offersSliders/S2.webp"
import S3 from "../../Assets/images/mobileView/offersSliders/S3.webp"
import S4 from "../../Assets/images/mobileView/offersSliders/S4.webp"
import S5 from "../../Assets/images/mobileView/offersSliders/S5.webp"
const OfferSlider = () =>{
const images = [
    {
        image:S1
    },
    {
        image:S2
    },
    {
        image:S3
    },
    {
        image:S4
    },
    {
        image:S5
    },
]
    return(
        <div style={{backgroundColor:'white'}}>
            <div style={{marginLeft:15,padding:10}}>           
           <Typography color="textSecondary" variant="body2"><b>WISH LIST FROM THE BIGGEST BRAND</b></Typography>
           </div>
        <OwlCarousel
        autoWidth
        margin={10}
        loop
        >
            {
                images.map((item)=>(                    
                    <div style={{width:'60vw'}}>
                    <img src={item.image}/>
                    </div>             
                    
                ))
            }

        </OwlCarousel>
        </div>
    )
}
export default OfferSlider;