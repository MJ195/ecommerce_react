import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DrawerComponent from './drawer';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import isithora from '../Assets/logo/isithora logo.png';
import { createMuiTheme } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import {withRouter,useRouteMatch} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";

// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  AppBar: {
    offset: theme.mixins.toolbar,
    padding: 30
  },
  AppBarSeperator: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
  },
  links: {
    margin: '2%',
    color: 'black',
    textDecoration: 'none',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItem: "center",


    [theme.breakpoints.down(500)]: {
      display: 'none'
    },
  },
  hideTool: {
    display: 'none',
  },
  firstLink: {
    textDecoration: 'none',
    color:'black',
    "&:hover": {
      borderBottom: '4px solid black',
      paddingBottom: 37,
      boxSizing: 'border-box'
    }
  },
  secondLink: {
    textDecoration: 'none',
    color:'blue',
    "&:hover": {
      borderBottom: '4px solid blue',
      paddingBottom: 37,
      boxSizing: 'border-box',     
      textDecoration:'none'
    }
  },
  thirdLink: {
    textDecoration: 'none',
    color:'orange',
    "&:hover": {
      borderBottom: '4px solid orange',
      paddingBottom: 37,
      boxSizing: 'border-box'
    }
  },
  fourthLink: {
    textDecoration: 'none',
    color:'green',
    "&:hover": {
      borderBottom: '4px solid green',
      paddingBottom: 37,
      boxSizing: 'border-box'
    }
  },

}));

 const ButtonAppBar=()=> {

  const history = useHistory()
  const urlMatch = window.location.href
 const urlMatch2 = urlMatch.split("/").pop()
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [menu, setMenu] = useState()
  // const [value,setValue]=useState(null);
  const value = useSelector(state => state.cartItem);
  const wishListValue = useSelector(state => state.wishList);
  useEffect(() => {   
  }, [value]);
  useEffect(() => { 
  }, [wishListValue]);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" calssName={classes.AppBar} style={{ backgroundColor: 'white', boxShadow: '0 0' }}>
        {matches ?
          <Toolbar>
            {/* <Button onClick={()=>setMenu(true)} style={{color:'black'}}><MenuIcon/></Button> */}
            {!urlMatch2?
            <DrawerComponent />:
            <IconButton onClick={()=>{history.goBack()}}>
              <ArrowBackIcon/>
            </IconButton>
            }
            <div style={{ disply: 'flex', flexGrow: 1 }}></div>
            <div style={{ display: 'flex', columnGap: 10, justifyContent: 'flex-end' }}>
              <div>
                <Badge badgeContent={value ? value.length : null} color="primary">
                  <Link to={"/cart"} className={classes.links} ><ShoppingCartIcon /> </Link>
                </Badge>
              </div>
              <div>
                <Badge badgeContent={wishListValue ? wishListValue.length : null} color="primary">
                  <Link to={"/wishlist"} className={classes.links} ><span><FavoriteBorderIcon /></span></Link>
                </Badge>
              </div>
            </div>
          </Toolbar> :

          <Toolbar className={classes.toolbar}>
            <div style={{ flexGrow: 1, display: 'flex' }}>
              <Link to={"/"} className={classes.links}><img src={isithora} style={{ height: 36 }} /></Link>
              <Link to={"/products/casual"} className={classes.links} style={{textDecoration:'none'}}><span className={classes.firstLink}>Casual</span></Link>
              <Link to={"/products/formal"} className={classes.links} style={{textDecoration:'none'}}><span className={classes.secondLink}>Formal</span></Link>
              <Link to={"/products/sports"} className={classes.links} style={{textDecoration:'none'}}><span className={classes.thirdLink}>Sports</span></Link>
              <Link to={"/shirts"} className={classes.links} style={{textDecoration:'none'}}><span className={classes.fourthLink}>Shirts</span></Link>
            </div>
            <div style={{ display: 'flex', alignItem: 'center' }}>
              <div style={{ margin: '2%', flex: 1, marginRight: 15 }}>
                <Badge badgeContent={wishListValue ? wishListValue.length : null} color="primary">
                  <Link to={"/wishlist"} className={classes.links}><span><FavoriteBorderIcon /></span></Link>
                </Badge>
              </div>
              <div style={{ flex: 1, marginRight: 15 }}>
                <Badge badgeContent={value ? value.length : null} color="primary">
                  <Link to={"/cart"} className={classes.links}><ShoppingCartIcon /> </Link>
                </Badge>
              </div>
            </div>
          </Toolbar>
        }
      </AppBar>
      <div style={{ marginBottom: 3 }} className={classes.AppBarSeperator}></div>
    </div>
  );
}

export default withRouter(ButtonAppBar);



