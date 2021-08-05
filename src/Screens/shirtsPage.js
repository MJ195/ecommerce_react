import React from 'react';
import { Link } from 'react-router-dom';
// import shirtsData from "../Data/shirtsData";
import { Card, CardHeader, CardContent, Typography, Button ,makeStyles} from "@material-ui/core";
import shirtsData from "../redux/reducer";
import {useSelector} from "react-redux";
import ShirtCarousel from '../Components/shirtCarousel';
const useStyles = makeStyles((theme)=>({

}));
const Shirts = () => {
    const shirtsDataRedux = useSelector(state=>state.shirtsData);
    const classes = useStyles();
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
            
            {
                shirtsDataRedux.map((item, key) => (
                    <Link to={`/detailedView/${item.ID}`} style={{textDecoration:'none'}} >
                    <Card key={key} id="card" style={{ minWidth: 250, minHeight: 400, border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd', margin: 10, transition: '0.5s linear' }}>
                        <CardHeader align="center" />

                        <div style={{ height: '50%' }} id="image">
                            <img style={{ maxWidth: 250, width: '100%', height: '100%', maxHeight: 300, display: 'block', objectFit: 'fill' }} src={item.imageMain} />
                        </div>
                        <div style={{ maxHeight:300,maxWidth:250,objectFit:'fill',overflow:'hidden'}} id="image2" >
                           <ShirtCarousel key={key} images={item.images} style={{maxHeight:'100%'}}/>
                        </div>                       
                        <CardContent id="cardContent">
                            <Typography style={{ paddingLeft: '1%' }} color="textSecondary" >{item.brand}</Typography>
                            <Typography style={{ paddingLeft: '1%' }} variant="body2">{item.name.length > 29 ? item.name.slice(0, 25) + "..." : item.name}</Typography>
                            <Typography style={{ paddingLeft: '1%' }}><b>Rs. {item.price}</b></Typography>
                            <Button style={{ border: 'none', outline: 'none', background: '#333', color: 'white', width: '100%', height: 40, display: 'block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0' }} >Add to cart</Button>
                        </CardContent>

                    </Card>
                    </Link>
                ))
            }
            
        </div>
    )
}

export default Shirts;