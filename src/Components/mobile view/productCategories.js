import React from 'react';
import {withRouter} from 'react-router-dom'
// owl carouse
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// **owl  carousel
import P1 from '../../Assets/images/mobileView/categories/img1.webp';
import P2 from '../../Assets/images/mobileView/categories/img2.webp';
import P3 from '../../Assets/images/mobileView/categories/img3.webp';
import P4 from '../../Assets/images/mobileView/categories/img4.webp';
import P5 from '../../Assets/images/mobileView/categories/img5.webp';
import P6 from '../../Assets/images/mobileView/categories/img6.webp';
import P7 from '../../Assets/images/mobileView/categories/img7.webp';
import P8 from '../../Assets/images/mobileView/categories/img8.webp';
import { Grid } from '@material-ui/core';

const ProductCarousel = (props) => {
    const {history} = props;   
    const products = [
        {
            image: P1,
            onClick:()=>history.push('/shirts'),            
        },
        {
            image: P2,
            onClick:()=>history.push('/shirts')
        },
        {
            image: P3,
            onClick:()=>history.push('/shirts')
        },
        {
            image: P4,
            onClick:()=>history.push('/shirts')
        },
        {
            image: P5,
            onClick:()=>history.push('/shirts')
        },
        {
            image: P6,
            onClick:()=>history.push('/shirts')
        },
        {
            image: P7,
            onClick:()=>history.push('/shirts')
        },
        {
            image: P8,
            onClick:()=>history.push('/shirts')
        },
    ]
    return (
        <OwlCarousel       
           
            autoWidth
            
        >
            {products.map((item) => (
                <div style={{marginLeft:0,marginRight:0,width:'20vw'}}>
                    <img src={item.image} onClick={item.onClick}/>
                </div>
            ))
            }

        </OwlCarousel>
    )
}
export default withRouter(ProductCarousel);