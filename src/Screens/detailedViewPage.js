import { Grid, Card, makeStyles, GridList, GridListTile, Typography, Box, Button, List, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import shirtsData from '../Data/shirtsData';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { useSelector, useDispatch } from 'react-redux';
import { addCartItem, addWishList, addShoesData,addShirtsData } from '../redux/reducer';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 600,
        height: 450,
        [theme.breakpoints.down(600)]:{
            display:'none'
        }
    },
}));

const DetailedView = ({ match }) => {
    const cartItem = useSelector(state => state.cartItem);
    const classes = useStyles();
    // get specific shirt data from redux and compare with params data
    const shirtsDataRedux = useSelector(state => state.shirtsData);
    const [shirtsDataState,setShirtsDataState] = useState(shirtsDataRedux)
    const specificShirtData = shirtsDataRedux.filter((item) => {
        if (match.params.id === item.ID) {
            return item
        }
        console.log("specific shirt data")
    })
    
    // getting wishlist data from redux
    const wishListRedux = useSelector(state => state.wishList);
    const [wishListState, setWishListState] = useState(wishListRedux);
    const [cart, setCart] = useState(cartItem);
    const [userId, setUserId] = useState("");
    const dispatch = useDispatch();
    // for size button selection
    const [sizeButton, setSizeButton] = useState({
        S: false,
        M: false,
        L: false,
        XL: false
    })
    //   size value for shirts
    const [size, setSize] = useState(0)
    // get shoes data from redux and store to state
    const shoesDataRedux = useSelector(state => state.shoesData);
    const [shoesDataState, setShoesDataState] = useState(shoesDataRedux);
    // update shoes data in redux when changes made in state
    useEffect(() => {
        dispatch(addShoesData(shoesDataState))
    }, [shoesDataState])
    // adding to cart & restrict duplicate value 
    const addCartHandler = (i, id, key) => {

        const returnValue = cartItem.filter((item) => {
            if (item.ID !== id) {
                console.log(item.ID, id, " not match bbb  already done")
                return true
            }

            console.log(item.ID, userId, " match bbb  already done")
        })
        // if (size) {
        if (cartItem.length > 0) {
            //    console.log(cartItem.length,returnValue.length,"length da")           
            if (cartItem.length === returnValue.length) {
                if (size) {
                    setCart((carts) => {
                        const data = [...carts];                        
                        data.push(i)
                        i.size = size;
                        setSize(0)
                        return data;
                    })
                    // to disable add to cart button
                    setShoesDataState((carts) => {
                        const data = [...carts];
                        i.added = true
                        data.push(i)
                        console.log(i.added, "true or false")
                        return data;
                    });
                     // to disable add to cart button
                    // setShirtsDataState((carts)=>{
                    //     const data = [...carts];
                    //     i.added = true
                    //     data.push(i)
                    //     console.log(i.added, "true or false")
                    //     return data;  
                    // })
                } else {
                    alert("Select size")
                }
            }
        } else {
            if (size) {
                console.log("not greter")
                setCart((carts) => {
                    const data = [...carts];
                    i.added = true
                    i.size = size;
                    data.push(i)
                    setSize(0)
                    return data;
                })
                setShoesDataState((carts) => {
                    const data = [...carts];
                    i.added = true
                    data.push(i)
                    console.log(i.added, "true or false")
                    return data;
                });
                // setShirtsDataState((carts)=>{
                //     const data = [...carts];
                //     i.added = true
                //     data.push(i)
                //     console.log(i.added, "true or false")
                //     return data;  
                // })
            } else {
                alert("select size")
            }
        }
        // } 
        // else {
        //     alert("select size")
        // }
    };

    // adding to wishlist and also restrict duplicate value
    const addWishListHandler = (i, id, key) => {
        const returnWishListValue = wishListRedux.filter((item) => {
            if (item.ID !== id) {
                console.log(item.ID, id, " not match bbb  already done")
                return true
            }

            console.log(item.ID, userId, " match bbb  already done")
        })
        // if (size) {
            if (wishListState.length > 0) {
                //    console.log(cartItem.length,returnValue.length,"length da")           
                if (wishListState.length === returnWishListValue.length) {
                    if (size) {
                        setWishListState((carts) => {
                            const data = [...carts];
                            i.size = size;
                            i.addedWishList = false
                            data.push(i)
                            setSize(0)
                            return data;
                        })
                        setShoesDataState((carts) => {
                            const data = [...carts];
                            i.added = false
                            data.push(i)
                            console.log(i.added, "true or false")
                            return data;
                        });
                    } else {
                        alert("select size")
                    }
                }
            } else {
                console.log("not gretaer")
                if (size) {
                    setWishListState((carts) => {
                        const data = [...carts];
                        i.size = size;
                        i.addedWishList = false
                        data.push(i)
                        setSize(0)
                        return data;
                    })
                    setShoesDataState((carts) => {
                        const data = [...carts];
                        i.added = false
                        data.push(i)
                        console.log(i.added, "true or false")
                        return data;
                    });
                } else {
                    alert("select size")
                }
            }
        
        // else{
        //     alert("select size")
        // }
    };
    // to update added cart produts to redux when updating state value
    useEffect(() => {
        dispatch(addCartItem(cart));
        console.log(cart)
    }, [cart])
    // to update added cart produts to wishListRedux when updating wishListState
    useEffect(() => {
        console.log(wishListState, "wish")
        dispatch(addWishList(wishListState));
    }, [wishListState])
    // while shirts added data update
    useEffect(() => {
       
        dispatch(addShirtsData(shirtsDataState));
    }, [shirtsDataState])
    return (
        // main grid ->2 grid items   
        // 1 item -> image List 
        // 2 item->contain grid container->required grid items

        <Grid container style={{ marginTop: 40 }} >
            {/* gridlist container */}
            <Grid item md={7} xs={12} >
                <div className={classes.root} >
                    <GridList  cellHeight={460} className={classes.gridList} cols={8} style={{height:1000}}>
                        {specificShirtData.map((item) => (
                            item.images.map((image) => (
                                <GridListTile key={image} cols={4 || 1}>
                                    <img src={image} style={{maxHeight:'100%'}} alt={item.brand} />
                                </GridListTile>
                            ))

                        ))}
                    </GridList>

                </div>
            </Grid>
            {/* item details container */}
            <Grid item md={5} xs={12}>

                {specificShirtData.map((item) => (
                    <Grid container direction="column">
                        {/* brand name grid */}
                        <Grid item md={11} xs={12} style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd', marginBottom: 5 }}>
                            <Typography variant="h5" style={{ color: '#29303e' }}><b>{item.brand}</b></Typography>
                            <Typography color="textSecondary">{item.name}</Typography>
                        </Grid>

                        <Grid item md={11} xs={12} style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd' }}>
                            <Typography variant="h5" style={{ color: '#29303e' }}><b><span>Rs.{item.price}</span></b> <span style={{ color: 'GrayText', textDecoration: 'line-through', fontSize: '0.8em' }}> &nbsp;&nbsp;Rs.{item.price + (item.price * 40 / 100)}</span><span style={{ color: 'orange' }}>&nbsp; (40% OFF)</span></Typography>
                            <Typography variant="body2" style={{ color: "#32de84" }}><b>inclusive of all taxes</b></Typography>
                            {/* select size */}
                            <br /><Box>
                                <Typography style={{ color: '#29303e' }}><b>SELECT SIZE</b></Typography><br />
                                <Box>
                                    <Button id={sizeButton.S ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setSize(38); setSizeButton({ S: true, M: false, L: false, XL: false }) }}><span >38</span></Button>
                                    <Button id={sizeButton.M ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setSize(40); setSizeButton({ S: false, M: true, L: false, XL: false }) }}><span >40</span></Button>
                                    <Button id={sizeButton.L ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setSize(42); setSizeButton({ S: false, M: false, L: true, XL: false }) }}><span >42</span></Button>
                                    <Button id={sizeButton.XL ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setSize(44); setSizeButton({ S: false, M: false, L: false, XL: true }) }}><span >44</span></Button>
                                    <Box>
                                        {!item.added ? <Button disabled={item.added} style={{ border: 'none', outline: 'none', background: '#e72744', color: 'white', height: 40, display: 'inline-block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '40%', height: 50, marginRight: 20 }} onClick={(e) => addCartHandler(item, item.ID)}>ADD TO CART</Button>
                                            : <Button disabled={item.added} style={{ border: 'none', outline: 'none', background: '#e72744', color: 'white', height: 40, display: 'inline-block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '40%', height: 50, marginRight: 20 }} onClick={(e) => addCartHandler(item, item.ID)}>ITEM ADDED</Button>
                                        }
                                        <Button style={{ border: 'none', outline: 'none', border: '1px solid black', color: 'black', height: 40, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '40%', height: 50 }} onClick={(e) => addWishListHandler(item, item.ID)}><span style={{ color: '#f13ab1', paddingTop: 8 }}><FavoriteSharpIcon /></span> &nbsp;WISHLIST</Button>
                                        <Typography>Rs.{item.price}<span style={{ color: 'GrayText', textDecoration: 'line-through', fontSize: '0.8em' }}> &nbsp;&nbsp;Rs.{item.price + (item.price * 40 / 100)}</span><span style={{ color: 'orange' }}>&nbsp; (40% OFF)</span></Typography>
                                        <Typography color="textSecondary">Get it by Mon, Jun 28 - 630001 </Typography>
                                        <Typography>Seller:<span style={{ color: '#e72744' }}>{item.seller}</span></Typography>
                                    </Box>
                                </Box>
                            </Box>
                            {/* delivery potions           */}
                        </Grid>
                        <Grid item md={11} style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd' }}>
                            <Typography><span>DELIVERY OPTION</span><span > <LocalShippingIcon /></span></Typography><br />
                            <TextField id="outlined-basic" label="Enter Pincode" variant="outlined" />
                            {/* best offers */}
                            <Box style={{ padding: 10 }}>
                                {/* <Typography>BEST OFFERS</Typography> */}

                                {
                                    item.productDetails.map((item) => (
                                        <>
                                            <Typography style={{ paddingTop: 10, color: '#29303e' }}><b>PRODUCT DETAILS</b></Typography>
                                            <p style={{ paddingTop: 10 }}>{item.productDetails}</p>
                                            <Typography style={{ paddingTop: 10, color: '#29303e' }}><b>Size&amp;Fit</b></Typography>
                                            <p style={{ paddingTop: 10 }}>{item.sizeFit}</p>
                                            <Typography style={{ paddingTop: 10, color: '#29303e' }}><b>Material&amp;care</b></Typography>
                                            <p style={{ paddingTop: 10 }}>{item.materialCare}</p>
                                            {/* specification grid */}
                                            <Grid container>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>sleeveLength</Typography>
                                                    <Typography>{item.specification[0].sleeveLength}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Collar</Typography>
                                                    <Typography>{item.specification[0].collar}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Fit</Typography>
                                                    <Typography>{item.specification[0].fit}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Print or Pattern</Typography>
                                                    <Typography>{item.specification[0].print}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Occasion</Typography>
                                                    <Typography>{item.specification[0].occasion}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Length</Typography>
                                                    <Typography>{item.specification[0].length}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Hemline</Typography>
                                                    <Typography>{item.specification[0].hemline}</Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="textSecondary" variant="body2" style={{ paddingTop: 10 }}>Placket</Typography>
                                                    <Typography>{item.specification[0].placket}</Typography>
                                                </Grid>

                                            </Grid>
                                        </>
                                    ))
                                }
                            </Box>
                        </Grid>

                    </Grid>
                ))
                }

            </Grid>
        </Grid>
    )
}

export default DetailedView;