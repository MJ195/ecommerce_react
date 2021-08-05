import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import HomeScreen from "../Screens/home";
import Shoes from "../Screens/ShoesPage";
import ButtonAppBar from "../Components/navigationBar"
import Cart from "../Screens/cartPage";
import CartScreen from "../Screens/cartScreen";
import Shirts from "../Screens/shirtsPage";
import DetailedView from '../Screens/detailedViewPage';
import WishList from '../Screens/wishList';
import ProductList from '../Screens/productPage';
const Navigation = () =>{
    return(
        <BrowserRouter>
        <ButtonAppBar/>
        <Switch>
            <Route path="/"  exact component={HomeScreen}/>
            <Route path="/shoes/:id" component={Shoes}/>
            <Route path="/cart" component={CartScreen}/>
            <Route path="/shirts" component={Shirts}/>
            <Route path="/wishlist" component={WishList}/>
            <Route path="/detailedView/:id" component={DetailedView}/>
            <Route path="/products/:id" component={ProductList}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Navigation;