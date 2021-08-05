import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardHeader, CardContent, Typography, Button,Grid,useTheme,useMediaQuery,IconButton} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { addCartItem, addWishList } from '../redux/reducer';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const WishList = () => {
    const theme = useTheme();
    const isTrue = useMediaQuery(theme.breakpoints.down('xs'));
    const dispatch = useDispatch();
    const wishListRedux = useSelector(state => state.wishList);
    const [wishListState, setWishListState] = useState(wishListRedux);
    const cartItemRedux = useSelector(state => state.cartItem);
    const [cartItemState, setCartItemState] = useState(cartItemRedux);
    // move to cart from wishlist
    const addCartHandler = (i, id, key) => {

        const returnValue = cartItemState.filter((item) => {
            if (item.ID !== id) {
                console.log(item.ID, id, " not match bbb  already done")
                return true
            }


        })
        // if(size){
        if (cartItemState.length > 0) {
            //    console.log(cartItem.length,returnValue.length,"length da")           
            if (cartItemState.length === returnValue.length) {
                setCartItemState((carts) => {
                    const data = [...carts];
                    data.push(i)
                    return data;
                })
                setWishListState((carts) => {
                    const data = [...carts];
                    const data2 = data.filter((value) => {
                        if (id !== value.ID) {
                            return true
                        }
                    })
                    return data2
                })
            } else {
                setWishListState((carts) => {
                    const data = [...carts];
                    const data2 = data.filter((value) => {
                        if (id !== value.ID) {
                            return true
                        }
                    })
                    return data2
                })
            }
        } else {
            console.log("not greter")
            setCartItemState((carts) => {
                const data = [...carts];
                data.push(i)
                return data;
            })
            setWishListState((carts) => {
                const data = [...carts];
                const data2 = data.filter((value) => {
                    if (id !== value.ID) {
                        return true
                    }
                })
                return data2
            })
        }
        // }else{
        //     alert("select size")
        // }
    };
    // push cart value in redux
    useEffect(() => {
        dispatch(addCartItem(cartItemState))
    }, [cartItemState])
    // push wishlist value in redux
    useEffect(() => {
        dispatch(addWishList(wishListState))
    }, [wishListState])
    return (
        <Grid container style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }} justify="flex-start">
            <Grid container justify="">
                {wishListRedux.length > 0 ?
                    wishListRedux.map((item, i) => (
                        // <Link to={`/detailedView/${item.ID}`} style={{textDecoration:'none'}}>
                        <Grid item md={3} xs={6} style={{marginTop:50 }}>                                                 
                        <Card style={{ width: 240,maxWidth: isTrue ? '100%' : '45vh', height: 350, border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd', margin: 10, transition: '0.5s linear' }}>
                   
                            <CardHeader align="center" />
                        
                            <div style={{ height: '50%',position:'relative' }}>                         
                                <img style={{ maxWidth: 250, width: '90%', height: '100%', maxHeight: 300, display: 'block', objectFit: 'fill' }} src={item.imageMain} />
                                <IconButton style={{height:10,width:10,position:'absolute',left:'80%',top:0}} onClick={(e,i)=>{
                               setWishListState((carts=>{
                                const data = [...carts];                                                                
                                data.splice(i,1)
                                return data
                               }))

                           }}><HighlightOffIcon/></IconButton> 
                            </div>
                            <CardContent >
                                <Typography style={{ paddingLeft: '1%' }} color="textSecondary" >{!isTrue?item.brand:item.brand.length > 7 ? item.brand.slice(0, 7) + "..." : item.brand}</Typography>
                                <Typography style={{ paddingLeft: '1%' }} variant="body2">{!isTrue?item.name.length > 18 ? item.name.slice(0, 18) + "..." : item.name:item.name.length > 7 ? item.name.slice(0, 7) + "..." : item.name}</Typography>
                                <Typography style={{ paddingLeft: '1%' }}>$ {item.price}</Typography>
                                <Button style={{ border: 'none', outline: 'none', background: '#333', color: 'white', width: '100%', height: 40, display: 'block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0' }} onClick={() => addCartHandler(item, item.ID)}>Move to cart</Button>
                          
                            </CardContent>

                        </Card>
                        </Grid>
                        // </Link>
                    )) : <Typography style={{ marginTop: 40 }} variant="h4" style={{marginLeft:'40%',marginTop:'2%'}}>Your Wishlist Is Empty...!</Typography>
                }
                </Grid>
            
        </Grid>
    )
}
export default WishList;