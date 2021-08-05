import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid, Card, CardHeader, CardContent, List, ListItem, ListItemText, useTheme, useMediaQuery, makeStyles, MenuItem, Popover } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// import FiltersDrawer from "../Components/productPage/drawer"
// import ClippedDrawer from "../Components/productPage/drawer"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Checkbox, FormControlLabel } from '@material-ui/core'
import { addFilterBrand, addProductTypes, addShoesData } from '../redux/reducer';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Ads from '../Components/mobile view/ads';
import SimplePopover from '../Components/productPage/popOver';
import Pagination from '../Components/productPage/pagination';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addWishList } from '../redux/reducer';
// import A1 from '../Assets/images/mobileView/ads/ad2.jpg'
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(-2),
        width: 100,
    },
    hoverButton: {
        display: 'none',
      

    },
    card: {
        '&:hover': {
            "& $hoverButton": {
                display: 'block',
                marginTop: -10
            },

        }

    }
}));
const ProductList = ({match}) => {
    const classes = useStyles();
    const typeRedux = useSelector(state => state.productTypes)
    const [typeState, setTypeState] = useState(typeRedux);
    const [test, setTest] = useState(0);
    const dispatch = useDispatch();
    // import  shoes data
    var shoesDataRedux = useSelector(state => state.shoesData);
    const shoesDataRedux2=shoesDataRedux.filter(item=>{
        if(item.type===match.params.id){
            return true
        }
    })
    const [shoesDataState, setShoesDataState] = useState(shoesDataRedux);
    // collect Brand names from shoes data for filters
    let text = [];

    for (let i = 0; i < shoesDataRedux2.length; i++) {
        text.push(shoesDataRedux2[i].brand);
        text.sort();
    }
    const brandNames = text.filter((item, index, arr) => {
        return arr.indexOf(item) == index

    })
    //    For pagination 

    const [currentPage, setCurrentPage] = useState(1);
    const postPerPage = 10;
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const totalPage = Math.ceil(shoesDataRedux2.length / postPerPage);

    const paginate = (number) => {
        setCurrentPage(number)

    }

    // to hide filters grid while in XS
    const theme = useTheme();
    const isTrue = useMediaQuery(theme.breakpoints.down('xs'));

    // add to wishlist
    const wishListRedux = useSelector(state => state.wishList);
    const [wishListState, setWishListState] = useState(wishListRedux);
    const addWishListHandler = (i, id, key) => {
        console.log(i, id)
        const returnWishListValue = wishListRedux.filter((item) => {
            if (item.ID !== id) {
                // if(wishListRedux.indexOf(i)==-1){
                console.log(item.ID, id, " not match bbb  already done")
                return true
            }
          

        })
        console.log(returnWishListValue.length, 'outu')
        // if (size) {
        if (wishListState.length > 0) {
            //    console.log(cartItem.length,returnValue.length,"length da")           
            if (wishListState.length === returnWishListValue.length) {

                setWishListState((carts) => {
                    const data = [...carts];
                    i.addedWishList = true
                    data.push(i)
                    return data;
                })
            }
        } else {
            setWishListState((carts) => {
                const data = [...carts];
                i.addedWishList = true
                data.push(i)
                return data;
            })
        }



        // else{
        //     alert("select size")
        // }

    };
    useEffect(() => {
        console.log(wishListState, "wish")
        dispatch(addWishList(wishListState));
    }, [wishListState])

    // to hide and show the checkbox
    const hideShow = (it, index) => {
        setTest(index)
        console.log(test)
        const tempType = typeState.map((item, i) => {
            if (i === index) {
                const update = {
                    ...item, arrow: !item.arrow
                }
                return update
            }
            return item
        })
        setTypeState(tempType)
    }
    // to select and deselect checkbox
    const CheckboxStatus = (i, ti) => {
        const tempCheckType = typeState.map((item, index) => {
            if (i === index) {
                console.log(item, "from jigu")
                const abc = {
                    ...item, types:
                        item.types.map((type, typeIndex) => {
                            if (ti === typeIndex) {
                                const ta = {
                                    ...type, status: !type.status
                                }
                                return ta
                                console.log(ta, "ta")
                            }
                            return type
                        })
                }

                return abc
            }
            return item
        })
        setTypeState(tempCheckType)
    }
    // handle select Box
    function compareLTH(a, b) {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }
    function compareHTL(a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        return 0;
    }
    const handleSelectBox = (e) => {
        let exa;
        if (e.target.value === "LTH") {
            exa = shoesDataRedux.slice().sort(compareLTH)
            console.log(exa, "compare")
            setShoesDataState(exa)

        }

        else if (e.target.value === "HTL") {
            exa = shoesDataRedux.slice().sort(compareHTL)
            console.log(exa, "compare")
            setShoesDataState(exa)
        }

    }
    useEffect(() => {
        dispatch(addShoesData(shoesDataState))
        console.log(displayData, "hghj")
    }, [shoesDataState])
    // filter the product by brand name
    const filterBrandRedux = useSelector(state => state.filterBrand);
    const [filterBrandState, setFilterBrandState] = useState(filterBrandRedux);
    const [checked, setChecked] = useState([]);
    const displayData = filterBrandState.length > 0 ? filterBrandState.slice(firstIndex, lastIndex) : shoesDataRedux2.slice(firstIndex, lastIndex);
    // displayData.slice(firstIndex,lastIndex)
    const FilterByBrand = (e, item) => {
        const currentIndex = checked.indexOf(item);
        const newChecked = [...checked]
        setCurrentPage(1)
        if (e.target.checked) {
            if (currentIndex == -1) {
                newChecked.push(item)
            }

        }
        else {
            newChecked.splice(currentIndex, 1)
        }
        console.log(newChecked, item, "brand du da");
        setChecked(newChecked)
        const filteredData = shoesDataRedux.filter((element) => {
            if (newChecked.indexOf(element.brand) > -1) {
                return item
            }
        })
        console.log(filteredData, "data da")
        setFilterBrandState(filteredData)
    }
    useEffect(() => {
        dispatch(addProductTypes(typeState))
    }, [typeState])
    useEffect(() => {
        dispatch(addFilterBrand(filterBrandState))
        console.log(filterBrandState, 'state da')
    }, [filterBrandState])

    return (
        <Grid container style={{ marginTop: 70 }}>
            {/* Products and filters grid */}
            <Grid container spacing={0} >
                {/* Filters Grid */}
                <Grid item style={{ paddingLeft: 20 }} md={2} sm={2} style={{ display: isTrue ? 'none' : 'block' }}>
                    <div style={{ display: 'flex', padding: 6, }}>
                        <Typography > <b>FILTERS</b></Typography>
                    </div>
                    <Grid container style={{ border: '2px solid #eee' }}>
                        {/* brand filter */}
                        <Grid item style={{ maxHeight: 300, overflow: 'hidden' }}>

                            <List dense disablePadding style={{ display: 'flex', flexDirection: 'column', flexWrap: 'no-wrap' }}>
                                <Typography variant="body1"><b>BRAND</b></Typography>

                                <Grid item md={12}>
                                    {
                                        brandNames.map((item, index) => (
                                            index < 4 &&
                                            <ListItem gutter={false}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            // checked={false}
                                                            onChange={(e) => FilterByBrand(e, item)}
                                                            name="checkedB"
                                                            color="Secondary"
                                                            size="small"
                                                            style={{ padding: 0 }}
                                                        />
                                                    }
                                                    label={<Typography variant="body2" color="textSecondary">{item}</Typography>}
                                                    style={{ padding: 0 }}
                                                />
                                            </ListItem>

                                        ))

                                    }
                                    <div style={{ textAlign: 'center' }}>
                                        <SimplePopover brand={brandNames} callBack={FilterByBrand} />
                                    </div>
                                </Grid>

                            </List>
                        </Grid>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Grid>
                {/* Top placed types and checkbox grid */}
                <Grid item md={10} sm={10}>
                    <div style={{ display: 'flex', paddingLeft: 10, display: isTrue ? 'none' : 'flex', borderBottom: '1px solid #eee' }}>
                        <div style={{ display: 'flex' }}>
                            {
                                typeState.map((item, index) => (
                                    <div style={{ display: 'flex', flexDirection: 'column', display: 'block' }}>
                                        <Button style={{ textTransform: 'none', color: 'grey' }} onClick={() => hideShow(item, index)} color="textSecondary">{item.name}{!item.arrow ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</Button><br />
                                    </div>


                                ))
                            }
                        </div>
                        <div>
                            {/* <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                // value={age}
                                // onChange={handleChange}
                                label="Age"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl> */}
                            <select name="cars" onChange={(e) => handleSelectBox(e)} style={{ width: 200, height: 30, border: '1px solid #eee' }} placeholder="csfsdcs">
                                <option selected disabled hidden>Sort by:Recommended</option>
                                <option value="saab">What's new</option>
                                <option value="LTH">Price:Low to High</option>
                                <option value="HTL">price:High to Low</option>
                            </select>
                        </div>

                    </div>
                    <div style={{ paddingLeft: 10 }}>
                        {typeState[test].arrow &&
                            <div>
                                <Typography style={{ fontSize: 10 }}>
                                    {typeState[test].types.map((type, typeIndex) => (
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={type.status}
                                                    onChange={() => CheckboxStatus(test, typeIndex)}
                                                    name="checkedB"
                                                    color="Secondary"
                                                    size="small"
                                                />
                                            }
                                            label={<Typography variant='body2'>{type.name}</Typography>}
                                        />
                                    ))

                                    }

                                </Typography>
                            </div>

                        }
                    </div>
                    {/* ads at top in mobile view */}
                    {isTrue &&
                        <div style={{ backgroundImage: 'linear-gradient(#bd6da6,#d799cb)', display: 'flex', justifyContent: 'space-around', height: '10vh', alignItems: 'center', marginTop: -50 }}>
                            <div >
                                <p style={{ color: 'white', fontWeight: 'bold',marginTop:10 }}>FLAT 40% OFF</p>
                                <p style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>FRIDAY</p>
                            </div>
                            <div >
                                <p style={{ color: 'white', fontWeight: 'bold',marginTop:10 }}>FLAT 40% OFF</p>
                                <p style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>FRIDAY</p>
                            </div>
                        </div>
                    }
                    <Grid container style={{ paddingLeft: 10, }} >
                        {/* Shoes data as card*/}

                        {
                            displayData.map((item, i) => (
                                <Grid item md={3} sm={4} xs={6}>

                                    <Card className={classes.card} style={{ maxWidth: isTrue ? '100%' : '45vh', height: 300, border: 'none', boxShadow: '0 0 0 0', overflow: 'hidden', padding: isTrue ? 0 : 10, margin: isTrue ? 5 : 10, transition: '0.5s linear' }}>
                                        <CardHeader align="center" />
               
                                        <div style={{ height: '50%' }}>
                                            <img style={{ maxWidth: 300, width: isTrue ? '100%' : '80%', height: '100%', maxHeight: 300, display: 'block', objectFit: 'fill' }} src={item.imageMain} />
                                        </div>

                                        <CardContent >
                                           {!isTrue && <Button className={classes.hoverButton} color="textSecondary" onClick={(e) => addWishListHandler(item, item.ID, i)} style={{ border: 'none', outline: 'none', border: '1px solid grey', color: 'black', height: 40, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0', width: '70%', height: 30,backgroud:'black'}} ><Typography color="textSecondary" style={{ display: 'flex', justifyContent: 'center',  }}>{item.addedWishList?<FavoriteSharpIcon style={{color:'red'}}/>:<FavoriteBorderIcon/>}  &nbsp;WISHLIST</Typography></Button>}
                                            <Typography style={{ paddingLeft: '1%' }} color="textSecondary" >{item.brand}</Typography>
                                            <Typography style={{ paddingLeft: '1%' }} variant="body2">{item.name.length > 23 ? item.name.slice(0, 20) + "..." : item.name}</Typography>
                                            <Typography style={{ paddingLeft: '1%' }}>Rs. {item.price}</Typography>
                                            {/* <Typography style={{ paddingLeft: '1%' }} className={classes.sizeTypo} variant="body2" color="textSecondary" component="p">
                Size:
                  {(item.size).map((item) => (
                <span style={{ color: 'black' }} className={classes.size}>{item}</span>
              ))} */}
                                            {/* </Typography> */}
                                            {/* <Button  style={{ border: 'none', outline: 'none', background: '#333', color: 'white', width: '100%', height: 40, display: 'block', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 2, margin: '15px 0' }} >Add to cart</Button> */}

                                            {isTrue&&<Button color="textSecondary" onClick={(e) => addWishListHandler(item, item.ID, i)} style={{ border: 'none', outline: 'none', cursor: 'pointer', margin: '15px 0', marginTop:-14,float:'right'}} ><Typography color="textSecondary" style={{ display: 'flex', justifyContent: 'center' }}>{item.addedWishList?<FavoriteSharpIcon style={{color:'red'}}/>:<FavoriteBorderIcon/>}  </Typography></Button>}
                                        </CardContent>

                                    </Card>
                                </Grid>

                            ))
                        }


                    </Grid>

                </Grid>
            </Grid>
            <div style={{ dispaly: 'flex', paddingLeft: 50, alignItems: 'center', marginLeft: '50%', marginTop: '0vh', display: isTrue ? 'none' : 'block' }}>
                <Pagination totalPage={totalPage} paginate={paginate} currentPage={currentPage} />
            </div>
        </Grid >
    )
}

export default ProductList;