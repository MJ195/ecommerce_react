import React, { useEffect, useState } from 'react';
// import shoesData from "../Data/datas";
import image from "../Assets/images/casualShoes/nike1.jpeg";
import { Card, Grid, CardContent, CardMedia, makeStyles, Typography, CardHeader, Button, unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { useSelector, useDispatch,push } from 'react-redux';
import { addCartItem, addShoesData } from '../redux/reducer';
import {Redirect} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    marginTop: 50,
    height: 250

    // maxHeight:245 
  },
  card: {
    border: '1px solid black'
  },
  container: {
    // maxWidth: 245,
    display: 'flex',
    flexDirection: 'row'
  },
  media: {
    // height:100,
    // paddingTop: '56.25%', // 16:9,
    maxWidth: '100%',
    maxHeight: '100%'

  },
  size: {
    margin: '2%',
    border: '1px ',
  },
  sizeTypo: {


  }
}));



const Shoes = ({ match }) => {
  const cartItem = useSelector(state => state.cartItem);
  // console.log(cartItem)
  const classes = useStyles();
  // get shoes data from redux and store to state
  const shoesDataRedux = useSelector(state => state.shoesData);
  const [shoesDataState, setShoesDataState] = useState(shoesDataRedux);
  const shoesType = shoesDataState.filter((item) => {
    if (item.type === match.params.id) {
      return item
    }
  })
  // update shoes data in redux when changes made in state
  useEffect(() => {
    dispatch(addShoesData(shoesDataState))
  }, [shoesDataState])


  const [cart, setCart] = useState(cartItem);
  const dispatch = useDispatch();
  // Add cart Handler
  const addCartHandler = (i, id, key) => {
    const returnValue = cartItem.filter((item) => {
      if (item.ID !== id) {
        console.log(item.ID, id, " not match bbb  already done")
        return true
      }

      console.log(item.ID, " match bbb  already done")
    })
    if (cartItem.length > 0) {
      //    console.log(cartItem.length,returnValue.length,"length da")           
      if (cartItem.length === returnValue.length) {
        setCart((carts) => {
          const data = [...carts];
          i.added = true
          data.push(i)
          console.log(i.added, "true or false")
          return data;
        });
        // setting the product added value as true to disable add to cart button
        setShoesDataState((carts) => {
          const data = [...carts];
          i.added = true
          data.push(i)
          console.log(i.added, "true or false")
          return data;
        });
      }
    } else {
      console.log("not gretaer")
      setCart((carts) => {
        const data = [...carts];
        data.push(i)
        return data;
      });
      setShoesDataState((carts) => {
        const data = [...carts];
        i.added = true
        data.push(i)        
        return data;
      });
      
    }


    // setCart((carts) => {
    //   const data = [...carts];
    //   data.push({
    //     ID: i.ID,
    //     type: i.type,
    //     brand: i.brand,
    //     name: i.name,
    //     price: i.price,
    //     image: i.image,
    //     qty: 1,
    //     added: true
    //   });
    //   return data;
    // }) 
    // const newshoes = shoesType.map((item, i) => {
    //   if (i === key) {
    //     const updated = {
    //       ...item,
    //       ID: i.ID,
    //       type: i.type,
    //       brand: i.brand,
    //       name: i.name,
    //       price: i.price,
    //       image: i.image,
    //       qty: 1,
    //       added: true
    //     }
    //     return updated;
    //   }
    //   return item;
    // })
    // setShoesType(newshoes);

  };
  useEffect(() => {
    console.log(cart)
    dispatch(addCartItem(cart));
  }, [cart])

  return (

    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
 
      {
        shoesType.map((item, i) => (
          item.type === match.params.id ?

            <Card style={{ minWidth: 300, minHeight: 400, border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd', margin: 10, transition: '0.5s linear' }}>
              <CardHeader align="center" />
              {/* <CardMedia
                className={classes.media}
                image={item.image}                
                align="center"
              />              */}
              <div style={{ height: '50%' }}>
                <img style={{ maxWidth: 300, width: '100%', height: '100%', maxHeight: 300, display: 'block', objectFit: 'fill' }} src={item.imageMain} />
              </div>
              <CardContent >
                <Typography style={{ paddingLeft: '1%' }} color="textSecondary" >{item.brand}</Typography>
                <Typography style={{ paddingLeft: '1%' }} variant="body2">{item.name.length > 29 ? item.name.slice(0, 25) + "..." : item.name}</Typography>
                <Typography style={{ paddingLeft: '1%' }}>$ {item.price}</Typography>
                {/* <Typography style={{ paddingLeft: '1%' }} className={classes.sizeTypo} variant="body2" color="textSecondary" component="p">
                Size:
                  {(item.size).map((item) => (
                <span style={{ color: 'black' }} className={classes.size}>{item}</span>
              ))} */}
                {/* </Typography> */}
                {!item.added ? <Button disabled={item.added} style={{ border: 'none', outline: 'none', background: '#333', color: 'white', width: '100%', height: 40, display: 'block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0' }} value={item.ID} onClick={(e) => addCartHandler(item, item.ID, i)}>Add to cart</Button>
                  :
                  <Button disabled={item.added} style={{ border: 'none', outline: 'none', background: '#e72744', color: 'white', width: '100%', height: 40, display: 'block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0' }} value={item.ID} onClick={(e) => addCartHandler(item, item.ID, i)}>Item added to cart</Button>
                }
              </CardContent>

            </Card>
            : null
        ))
      }

    </div>
  )
}
export default Shoes;