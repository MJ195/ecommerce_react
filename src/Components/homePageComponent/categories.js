import React from 'react';
import {Grid,Typography} from '@material-ui/core'
import img1 from "../../Assets/images/homePage/categories/img1.webp";
import img2 from "../../Assets/images/homePage/categories/img2.webp";
import img3 from "../../Assets/images/homePage/categories/img3.webp";
import img4 from "../../Assets/images/homePage/categories/img4.webp";
import img5 from "../../Assets/images/homePage/categories/img5.webp";
import img6 from "../../Assets/images/homePage/categories/img6.webp";
import img7 from "../../Assets/images/homePage/categories/img7.webp";
import img8 from "../../Assets/images/homePage/categories/img8.webp";
import img9 from "../../Assets/images/homePage/categories/img9.webp";
import img10 from "../../Assets/images/homePage/categories/img10.webp";
import img11 from "../../Assets/images/homePage/categories/img11.webp";
import img12 from "../../Assets/images/homePage/categories/img12.webp";
import { withRouter } from 'react-router-dom';


const Categories = (props) =>{
    const {history} = props;
    const images =[
        {
            image:img1,
            onClick:()=>history.push("/shoes/casual")
        },
      
        {
            image:img2,
            onClick:()=>history.push("/shoes/formal")
        },
        {
            image:img3,
            onClick:()=>history.push("/shoes/sports") 
        },
        {
            image:img4,
            onClick:()=>history.push("/shoes/casual")
        },
        {
            image:img5,
            onClick:()=>history.push("/shoes/formal")
        },
        {
            image:img6,
            onClick:()=>history.push("/shoes/casual")
        },
      
        {
            image:img7,
            onClick:()=>history.push("/shoes/formal")
        },
        {
            image:img8,
            onClick:()=>history.push("/shoes/sports") 
        },
        {
            image:img9,
            onClick:()=>history.push("/shoes/casual")
        },
        {
            image:img10,
            onClick:()=>history.push("/shoes/formal")
        },
        {
            image:img11,
            onClick:()=>history.push("/shoes/formal")
        },
        {
            image:img12,
            onClick:()=>history.push("/shoes/formal")
        },
    ]
    return(
        <Grid container  style={{marginTop:90}}>
        <Typography variant="h5" color="textPrimary" style={{marginLeft:30,marginRight:30}} ><b>DEALS OF THE DAY</b></Typography><br/>
        <Grid container style={{marginLeft:50,marginRight:50,marginTop:50}}  spacing={3} >
        {images.map((item)=>(
             <Grid item md={2} xs={2} style={{marginBottom:0,marginTop:-30}}>
                 <div >
                 <img src={item.image} style={{maxWidth:'100%'}} onClick={item.onClick}/>
                 </div>
             </Grid> 
        ))            
        }  
        </Grid>        
    </Grid>
    )
}
export default withRouter(Categories);