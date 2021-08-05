import { Button, Card, CardHeader, Grid, Typography, Box, TextField, Container } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, addShoesData, addWishList } from '../redux/reducer';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import CheckIcon from '@material-ui/icons/Check';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    // for size buttons
    const [sizeButton, setSizeButton] = useState({
        S: false,
        M: false,
        L: false,
        XL: false
    })
    //   size value for shirts
    const [updatedSize, setUpdatedSize] = useState(props.size)
    // getting cart values
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartItem);
    const [carts, setCarts] = useState(cart);
    const addUpdateSize = () => {
        const update = carts.filter((item) => {
            console.log(item.Id, props.ID, updatedSize, "from update size")
            if (item.ID === props.id) {
                const updateSize = {
                    ...item, size: updatedSize
                }
                return updateSize
            }
            return item
        });
        setCarts(update)
    };
    useEffect(() => {
        dispatch(addCartItem(carts))
        console.log(carts, "from modal")
    }, [carts])
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Box>
                <Button id={sizeButton.S ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setUpdatedSize(38); setSizeButton({ S: true, M: false, L: false, XL: false }); addUpdateSize() }}><span >38</span></Button>
                <Button id={sizeButton.M ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setUpdatedSize(40); setSizeButton({ S: false, M: true, L: false, XL: false }); addUpdateSize() }}><span >40</span></Button>
                <Button id={sizeButton.L ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setUpdatedSize(42); setSizeButton({ S: false, M: false, L: true, XL: false }); addUpdateSize() }}><span >42</span></Button>
                <Button id={sizeButton.XL ? "select" : ""} style={{ borderRadius: '10%', width: 35, height: 35, display: 'inline-block', border: '1px solid #eee', disply: 'flex', justifyContent: 'center', alignItem: 'center', marginRight: 10 }} onClick={() => { setUpdatedSize(44); setSizeButton({ S: false, M: false, L: false, XL: true }); addUpdateSize() }}><span >44</span></Button>
            </Box>
        </div>
    );

    return (
        <div>
            <Button type="button" onClick={handleOpen}>
                <span style={{ color: '#29303e' }}>Size:{updatedSize}</span>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

// ################################
const CartScreen = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartItem);
    const [carts, setCarts] = useState(cart);
    const cartValue = cart.reduce((result, item) => result = result + item.price * item.qty, 0);

    // getting coupons from redux     
    const [discountValue, setDiscountValue] = useState(0);
    const coupon = useSelector(state => state.coupon);
    // getting user entered coupon code
    const [userCoupon, setUserCoupon] = useState("")
    // applying coupon
    const applyCoupon = () => {
        coupon.map((item) => {
            if (item.name === userCoupon) {
                setDiscountValue(item.discount);
                console.log(item.discount)
            }
        })

    }
    // getting shoesdata from redux
    const shoesDataRedux = useSelector(state => state.shoesData);
    const [shoesDataState, setShoesDataState] = useState(shoesDataRedux);

    // update shoes data in redux when changes made in state
    useEffect(() => {
        dispatch(addShoesData(shoesDataState))
    }, [shoesDataState])
    const handleAddQty = (key, count) => {
        const addedCount = carts.map((item, i) => {
            if (i === key) {
                console.log(item)
                const updateCount = {
                    ...item, qty: count + 1
                }
                return updateCount
            }
            return item
        })
        setCarts(addedCount)
    };

    const handleSubQty = (key, count) => {
        const addedCount = carts.map((item, i) => {
            if (i === key) {
                console.log(item)
                if (item.qty > 1) {
                    const updateCount = {
                        ...item, qty: count - 1
                    }
                    return updateCount
                }

            }
            return item
        })
        setCarts(addedCount)
    };
    useEffect(() => {
        dispatch(addCartItem(carts));
    }, [carts])
    //   Remove Handler
    const removeHandler = (i, id) => {
        {
            carts.filter((item, index) => {
                if (id === item.ID) {
                    setCarts((carts) => {
                        const data = [...carts];
                        const data1 = data.filter((item) => {
                            if (i !== item) {
                                return item
                            }
                        })
                        return data1;
                    })
                    // setting removed item added value as false to enable added cart button in shoes page
                    setShoesDataState((carts) => {
                        const data = [...carts];
                        i.added = false
                        data.push(i)
                        console.log(i.added, "true or false")
                        return data;
                    });
                }
            })

        }
    };

    //  add to wishlist handler
    const wishListRedux = useSelector(state => state.wishList);
    const [wishListState, setWishListState] = useState(wishListRedux);
    const cartItemRedux = useSelector(state => state.cartItem);
    const [cartItemState, setCartItemState] = useState(cartItemRedux)
    // move to wishlist from cart
    const addWishListHandler = (i, id, key) => {

        const returnValue = wishListState.filter((item) => {
            if (item.ID !== id) {
                console.log(item.ID, id, " not match bbb  already done")
                return true
            }


        })
        // if(size){
        if (wishListState.length > 0) {
            //    console.log(cartItem.length,returnValue.length,"length da")           
            if (wishListState.length === returnValue.length) {
                setWishListState((carts) => {
                    const data = [...carts];
                    data.push(i)
                    return data;
                })
                setCartItemState((carts) => {
                    const data = [...carts];
                    const data2 = data.filter((value) => {
                        if (id !== value.ID) {
                            return true
                        }
                    })

                    return data2
                })
                setShoesDataState((carts) => {
                    const data = [...carts];
                    i.added = false
                    data.push(i)
                    console.log(i.added, "true or false")
                    return data;
                });

            } else {
                setCartItemState((carts) => {
                    const data = [...carts];
                    const data2 = data.filter((value) => {
                        if (id !== value.ID) {
                            return true
                        }
                    })
                    return data2
                })
                setShoesDataState((carts) => {
                    const data = [...carts];
                    i.added = false
                    data.push(i)
                    console.log(i.added, "true or false")
                    return data;
                });
            }
        } else {
            console.log("not greter")
            setWishListState((carts) => {
                const data = [...carts];
                data.push(i)
                return data;
            })
            setCartItemState((carts) => {
                const data = [...carts];
                const data2 = data.filter((value) => {
                    if (id !== value.ID) {
                        return true
                    }
                })
                return data2
            })
            setShoesDataState((carts) => {
                const data = [...carts];
                i.added = false
                data.push(i)
                console.log(i.added, "true or false")
                return data;
            });
        }
    };

    useEffect(() => {
        dispatch(addCartItem(cartItemState))
    }, [cartItemState])
    // push wishlist value in redux
    useEffect(() => {
        dispatch(addWishList(wishListState))
    }, [wishListState])
    return (
        <div>
            {cart.length > 0 ?
                <div>
                    <Grid container style={{ marginTop: 10, paddingLeft: 10, marginBottom: 50 }} justify="center" spacing={0}>
                        {/* left side content */}
                        <Grid item md={6} xs={12} alignItems="center" alignContent="center">
                            <Grid container>
                                {/* pincode */}
                                <Grid item md={10} xs={12} alignItems="center" style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd', marginBottom: 5 }}>
                                    <Grid container alignItems="center" alignContent="center">
                                        <Grid item md={6} xs={12}>
                                            <Typography id="pincode" variant="h9" style={{ marginRight: 150, color: '#29303e' }}><b>Check delivery time &amp; services</b></Typography>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Button style={{ border: '1px solid #f13ab1', outline: 'none', color: '#f13ab1', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '50%', marginRight: 20, fontSize: 9 }}>ENTER PIN CODE</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/* Available offer */}
                                <Grid item md={10} xs={12} style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd' }}>
                                    <Typography style={{ color: '#29303e' }}><LocalOfferIcon /> Available Offers</Typography>
                                    <Typography variant="body2">10% instant discount with standard charted credit cards on a minimum spend of Rs.3,000,TCA</Typography>

                                </Grid>
                                {/* cart items */}
                                <Grid item md={10} xs={12} style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd' }}>
                                    <Box >
                                        <Typography style={{ float: 'left', color: '#29303e' }}><b>My Shopping Bag({cart.length}{cart.length > 1 ? "items" : "item"})</b></Typography>
                                        <Typography style={{ float: 'Right', color: '#29303e' }}><b>Total:Rs.{cartValue}</b></Typography>
                                    </Box>
                                    <Grid container spacing={1}>
                                        {
                                            cart.map((item, key) => (
                                                <Grid container style={{ padding: 10 }}>
                                                    <Grid item md={2} xs={3} style={{ overflow: 'hidden' }}>
                                                        <img style={{ maxWidth: '100%' }} src={item.imageMain} />
                                                    </Grid>
                                                    <Grid item md={10} xs={8} style={{ paddingLeft: 10, lineHeight: 1 }}>
                                                        <Typography style={{ color: '#29303e' }}><b>{item.brand}</b></Typography>
                                                        <Typography style={{ color: '#29303e', fontSize: 14 }}>{item.name}</Typography>
                                                        <Box>
                                                            <Typography color="textSecondary" style={{ fontSize: 11, float: 'left', marginRight: 100 }}>sold by:{item.seller}</Typography>
                                                            <Typography id="discountSM" style={{ fontSize: 12 }}><span style={{ color: '#29303e' }}>Rs.{item.price}</span> <span style={{ color: 'GrayText', textDecoration: 'line-through', fontSize: '0.8em' }}> &nbsp;&nbsp;Rs.{item.price + (item.price * 40 / 100)}</span><span style={{ color: 'orange' }}>&nbsp; (40% OFF)</span></Typography>
                                                        </Box>
                                                        {/* for size and qty */}

                                                        <Button id="buttonSize" style={{ float: 'left' }}><span style={{ color: '#29303e' }}><SimpleModal size={item.size} id={item.ID} /></span ><span style={{ color: '#29303e', marginTop: 4 }}><ArrowDropDownIcon /></span></Button>
                                                        {/* <Button id="buttonQty"><span style={{ color: '#29303e' }}>Qty:{item.qty}</span><span style={{ color: '#29303e', marginTop: 4 }}><ArrowDropDownIcon /></span></Button> */}
                                                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
                                                            <Typography style={{ color: '#29303e', fontSize: 14 }}>Qty</Typography>
                                                            <Button onClick={() => handleSubQty(key, item.qty)}>-</Button>
                                                            <Typography style={{ marginTop: 5 }} >{item.qty}</Typography>
                                                            <Button size='small' onClick={() => handleAddQty(key, item.qty)}>+</Button>
                                                        </div>
                                                        <div style={{}}>
                                                            <Typography color="textSecondary" style={{ fontSize: 11, margin: '5px 5px' }}>
                                                                <CheckIcon style={{ color: 'green', fontSize: 12 }} />
                                                                Delivery by 4 days</Typography>
                                                            <Button style={{ border: '1px solid #eee', outline: 'none', border: '0px solid grey', color: 'black', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '5px 0' }}><Typography variant="body2" color="textSecondary" onClick={() => removeHandler(item, item.ID)}>Remove</Typography></Button>
                                                            <Button><Typography color="textSecondary" variant="body2" onClick={() => addWishListHandler(item, item.ID)}>MOVE TO WISHLIST</Typography></Button>
                                                        </div>
                                                    </Grid>
                                                </Grid>

                                            ))
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* right side content */}
                        <Grid item md={4} xs={12} style={{ backgroundColor: 'white', border: '1px solid #eee', overflow: 'hidden', padding: 10, boxShadow: '2px 8px 20px #ddd', marginBottom: 5 }}>
                            {/* coupon */}
                            <Box>
                                <Typography color="textSecondary"><span><LocalOfferIcon /></span>COUPON</Typography>
                                <TextField disabled={discountValue ? true : false} onChange={(e) => setUserCoupon(e.target.value)} variant="outlined" size="small" />
                                {!discountValue ? <Button style={{ border: 'none', outline: 'none', border: '1px solid #f13ab1', color: '#f13ab1', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, marginLeft: 10, display: 'inline-block' }} onClick={() => applyCoupon()}>Apply</Button> :
                                    <Button style={{ border: 'none', outline: 'none', border: '1px solid #f13ab1', color: '#f13ab1', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, marginLeft: 10, height: 40 }} onClick={() => setDiscountValue(0)}><Typography variant="body2">Remove</Typography></Button>
                                }
                            </Box>
                            {/* Pricing Details */}

                            <Box style={{ marginTop: 30 }}>
                                <Typography color="textPrimary" variant="body2">PRICE DETAILS({cart.length}{cart.length > 1 ? "items" : "item"})</Typography>
                                <Container style={{ marginTop: 10 }}>
                                    <Typography color="textSecondary" style={{ float: 'left' }} variant="body2">Total MRP</Typography>
                                    <Typography color="textSecondary" style={{ float: 'right' }} variant="body2">{cartValue}</Typography>
                                </Container><br />
                                <Container style={{ marginTop: 10 }}>
                                    <Typography color="textSecondary" style={{ float: 'left' }} variant="body2">Discount on MRP</Typography>
                                    <Typography color="textSecondary" style={{ float: 'right' }} variant="body2"><span style={{ color: "#32de84" }}>{cartValue * discountValue / 100}</span></Typography>
                                </Container>   <br />
                                <Container style={{ marginTop: 10 }}>
                                    <Typography color="textSecondary" style={{ float: 'left' }} variant="body2">Coupon discount</Typography>
                                    <Typography color="textSecondary" style={{ float: 'right' }} variant="body2"><span style={{ color: '#f13ab1', }}>{discountValue ? "coupon applied" : "Apply coupon"}</span></Typography>
                                </Container> <br />
                                <Container style={{ marginTop: 10 }}>
                                    <Typography color="textSecondary" variant="body2" style={{ float: 'left' }}>Convenience Fee<span style={{ color: '#f13ab1', }}> (Know More)</span></Typography>
                                    <Typography color="textSecondary" style={{ float: 'right' }} variant="body2"><span style={{ textDecoration: 'line-through' }}>Rs.99 </span><span style={{ color: "#32de84" }}>FREE</span></Typography>
                                </Container><br /><br />
                                <Container style={{ marginTop: 10 }}>
                                    <Typography variant="body2" style={{ float: 'left', color: '#29303e' }}><b>Total Amount</b></Typography>
                                    <Typography style={{ float: 'right', color: '#29303e' }} variant="body2"><b>Rs.{cartValue - cartValue * discountValue / 100}</b></Typography>
                                </Container>
                            </Box>
                            <Button id="hide" size="large" style={{ border: 'none', outline: 'none', background: '#e72744', color: 'white', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '100%', height: 50, marginRight: 20 }}>PLACE ORDER</Button>
                        </Grid>
                    </Grid>

                    <Button id="show" size="large" style={{ border: 'none', outline: 'none', background: '#e72744', color: 'white', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '100%', height: 50, marginRight: 20, position: "fixed", bottom: -15 }}>PLACE ORDER</Button>
                </div>
                : <Typography style={{ marginTop: 40 }} variant="h4" align="center">Your Cart Is Empty...!</Typography>}
            </div>
            )
};
            export default CartScreen;

