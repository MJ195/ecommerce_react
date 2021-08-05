import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import {withRouter} from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
});

function SwipeableTemporaryDrawer(props) {
    const {history} = props; 
    const classes = useStyles();
    const [value, setValue] = useState();
    // const history = useHistory;
    const navLinks = [
        {
            name: "Casual",
            onClick:() => history.push("/products/casual")
        },
        {
            name: "Formal",
            onClick:() => history.push("/products/formal")
        },
        {
            name: "Sports",
            onClick:() => history.push("/products/sports") 
        },
        {
            name: "Shirts",
            onClick:() => history.push("/shirts") 
        },
    ];


    const drawerContent =(
        <div className={classes.list}>
            <List>
                {navLinks.map((item, index) => (

                    <ListItem button key={item} onClick={item.onClick}>                       
                        <ListItemText primary={item.name} style={{fontWeight:'bold'}}/>
                    </ListItem>
                ))}
            </List>
            <Divider />

        </div>
    );

    return (
        <div >
            <React.Fragment >
                <Button onClick={() => setValue(true)} ><MenuIcon /></Button>
                <SwipeableDrawer
                    anchor="left"
                    open={value}
                    onClose={() => setValue(false)}
                    onOpen={() => setValue(true)}
                    >                   
                      {drawerContent }
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

export default withRouter(SwipeableTemporaryDrawer);



