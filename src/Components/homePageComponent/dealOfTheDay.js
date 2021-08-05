import React from 'react';
import img1 from '../../Assets/images/homePage/dealOfTheDay/deal1.webp';
import img2 from '../../Assets/images/homePage/dealOfTheDay/deal2.webp';
import img3 from '../../Assets/images/homePage/dealOfTheDay/deal3.webp';
import img4 from '../../Assets/images/homePage/dealOfTheDay/deal4.webp';
import img5 from '../../Assets/images/homePage/dealOfTheDay/deal5.webp';
import {Grid,makeStyles,Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';


const DealOfTheDay = (props) =>{
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
    ]
    return(
        <Grid container  style={{marginTop:90}}>
            <Typography variant="h5" color="textPrimary" style={{marginLeft:30,marginRight:30}} ><b>DEALS OF THE DAY</b></Typography><br/>
            <Grid container style={{marginLeft:50,marginRight:50,marginTop:50}}   >
            {images.map((item)=>(
                 <Grid item md xs>
                     <div style={{width:'16vw',height:'40vh'}}>
                     <img src={item.image} style={{maxWidth:'100%'}} onClick={item.onClick}/>
                     </div>
                 </Grid> 
            ))            
            }  
            </Grid>        
        </Grid>
    )
}
export default withRouter(DealOfTheDay);