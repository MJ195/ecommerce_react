import React from 'react';
import {Grid,makeStyles,Typography} from '@material-ui/core';
import img1 from '../../Assets/images/homePage/dealOnTopBrands/img1.webp';
import img2 from '../../Assets/images/homePage/dealOnTopBrands/img2.webp';
import img3 from '../../Assets/images/homePage/dealOnTopBrands/img3.webp';
import img4 from '../../Assets/images/homePage/dealOnTopBrands/img4.webp';
import img5 from '../../Assets/images/homePage/dealOnTopBrands/img5.jpg';
import img6 from '../../Assets/images/homePage/dealOnTopBrands/img6.webp';
import img7 from '../../Assets/images/homePage/dealOnTopBrands/img7.webp';
import img8 from '../../Assets/images/homePage/dealOnTopBrands/img8.webp';
import img9 from '../../Assets/images/homePage/dealOnTopBrands/img9.jpg';
import img10 from '../../Assets/images/homePage/dealOnTopBrands/img10.webp';
import {withRouter} from 'react-router-dom';


const DealOnTopBrands = (props) =>{
    const {history} = props
    const images =[
        {
            image:img1,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img2,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img3,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img4,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img5,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img6,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img7,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img8,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img9,
            onClick:()=>history.push('/shirts')
        },
        {
            image:img10,
             onClick:()=>history.push('/shirts')
        },
    ]
    return(
        <Grid container  style={{marginTop:90}}>
            <Typography variant="h5" color="textPrimary" style={{marginLeft:30,marginRight:30}} ><b>BIGGEST DEALS ON TOP BRANDS</b></Typography><br/>
            <Grid container style={{marginLeft:50,marginRight:50,marginTop:50}} spacing={2}> 
            {images.map((item)=>(                
                 <Grid item  md style={{minHeight:250}}>
                     <div style={{width:'16vw',maxHeight:'100%'}}>
                     <img src={item.image} style={{maxWidth:'100%'}} onClick={item.onClick}/>
                     </div>
                 </Grid>               
            ))            
            }  
            </Grid>        
        </Grid>
    )
}
export default withRouter(DealOnTopBrands);