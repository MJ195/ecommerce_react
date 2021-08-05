import { Button, Card, CardHeader, Grid, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../redux/reducer';


// #####################################
const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartItem);
    // const cartValue = cart.reduce(item,0)
    // const [qty, setQty] = useState(0);
    const [carts, setCarts] = useState(cart);
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
    const [total, setTotal] = useState(0)
    useEffect(() => {
        // const totals = 
        setTotal(cart.reduce((total, item) => total = total + item.price * item.qty, 0))
    }, [cart]);
    //   Remove Handler
    const removeHandler = (i, id) => {
        {
            carts.map((item, index) => {
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
                }
            })

        }
    };
    return (
        <>
            {cart.length > 0 ?
                <Grid container >
                    <Grid item md={8} xs={12} sm={12}>
                        {cart.map((item, key) => (
                            // < Grid container />
                            // <Grid item md={8} xs={12} sm={12}> 
                            <Card style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
                                <Grid container>
                                    <Grid item xs={12} md={4}>
                                        <div style={{ width: 200, height: 200, marginRight: 40, padding: 10 }}>
                                            <img style={{ maxWidth: '100%' }} src={item.image} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={8}>
                                        <div style={{ padding: 10 }}>
                                            <Typography>{item.brand}</Typography>
                                            <Typography>{item.name}</Typography>
                                            <Typography color="textSecondary">{item.type}</Typography><br />
                                            <Typography>${item.price}</Typography><br />
                                            <div style={{ display: 'flex' }}>
                                                <Button style={{ marginRight: 10, padding: 0, fontSize: 20, border: '1px solid grey' }} onClick={() => handleSubQty(key, item.qty)}>-</Button>
                                                <Typography style={{ marginRight: 10, width: 40, textAlign: 'center', padding: 0, fontSize: 20, border: '1px solid grey' }}>{item.qty}</Typography>
                                                <Button size='small' style={{ marginRight: 10, padding: 0, fontSize: 20, border: '1px solid grey' }} onClick={() => handleAddQty(key, item.qty)}>+</Button>
                                                <Button style={{ border: 'none', outline: 'none', background: '#C80000 ', color: 'white', cursor: 'pointer', marginLeft: 20, width: 100 }} onClick={() => removeHandler(item, item.ID)}>Remove</Button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Card>

                            // </Grid>
                            // </Grid>
                        )
                        )}
                    </Grid>

                    <Grid item md={4} xs={12} sm={12}>
                        <Card style={{ padding: 10, margin: 10 }}>
                            <CardHeader
                                title="PRICE DETAILS"
                            />

                            <div style={{ display: 'flex' }}>
                                <Typography style={{ flexGrow: 1 }}>Items</Typography>
                                <Typography style={{ marginRight: '30%' }}>Qty</Typography>
                                <Typography style={{ marginRight: 100 }}>Price</Typography>
                            </div>
                            {cart.map((item) => (
                                <div style={{ display: 'flex' }}>
                                    <Typography style={{ flexGrow: 1 }}>{item.brand}</Typography>
                                    <Typography style={{ marginRight: '30%' }}>{item.qty}</Typography>
                                    <Typography style={{ marginRight: 100, width: 40 }}>{item.qty * item.price}</Typography>
                                </div>
                            ))}
                            <div style={{ display: 'flex' }}>
                                <Typography style={{ flexGrow: 1 }}><b>Total Amount</b></Typography>
                                <Typography style={{ marginRight: 100, width: 40 }}><b>{total}</b></Typography>
                            </div>
                        </Card>
                    </Grid>


                </Grid > : <Typography variant="h4" align="center" style={{ marginTop: 50 }}>Your Cart is Empty</Typography>}
                
                </>
    )
};
export default Cart;

