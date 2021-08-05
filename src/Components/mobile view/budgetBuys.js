import { Grid } from '@material-ui/core';
import React from 'react';
import B1 from "../../Assets/images/mobileView/budgetBuys/B1.webp";
import B2 from "../../Assets/images/mobileView/budgetBuys/B2.webp";
import B3 from "../../Assets/images/mobileView/budgetBuys/B3.webp";
import B4 from "../../Assets/images/mobileView/budgetBuys/B4.webp";

const BudgetBuys = () => {
    const images = [
        {
            image: B1
        },
        {
            image: B2
        },
        {
            image: B3
        },
        {
            image: B4
        },
    ]
    return (
        <Grid container style={{backgroundColor:'white',marginTop:10,padding:10}}>
            <Grid container>
                {
                    images.map((item) => (
                        <Grid item xs={6}>
                            <div >
                            <img src={item.image} style={{maxWidth:'100%'}}/>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}
export default BudgetBuys;