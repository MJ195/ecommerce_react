import React from 'react';
import CarouselComponent from "../Components/homePageComponent/carousel";
import Deal1 from '../Components/homePageComponent/dealOfTheDay';
import Deal2 from '../Components/homePageComponent/dealOnTopBrands';
import Categories from '../Components/homePageComponent/categories';
import ButtonAppBar from "../Components/navigationBar";
import { useTheme, useMediaQuery, makeStyles } from '@material-ui/core';
import Offers from '../Components/mobile view/offersCarousel';
// for mobile view
import ProductCarousel from '../Components/mobile view/productCategories';
import OfferSlider from '../Components/mobile view/offerSlider';
import BudgetBuys from '../Components/mobile view/budgetBuys';
//  for ads
import Ads from '../Components/mobile view/ads';
// import Ads images    
import ad1 from "../Assets/images/mobileView/ads/ad1.gif"
import ad2 from "../Assets/images/mobileView/ads/ad2.jpg"
const useStyles = makeStyles({
    div: {
        overflow: 'hidden',
    }
})
const HomeScreen = () => {
    const classes = useStyles();
    const theme = useTheme()
    const isTrue = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <div style={{ overflowX: 'hidden' }}>
            {isTrue ?
                <div className={classes.div}>
                    <CarouselComponent />
                    <Deal1 />
                    <Deal2 />
                    <Categories />
                </div>
                :
                <div>
                    <ProductCarousel />
                    <Offers />                    
                    <OfferSlider />
                    <BudgetBuys />
                    <Ads image={ad1} />
                </div>
            }
        </div>
    )
};
export default HomeScreen;