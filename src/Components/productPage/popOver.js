import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { ListItem, FormControl, Checkbox, FormControlLabel } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function SimplePopover(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div >
            <Button aria-describedby={id}  onClick={handleClick}>
            <Typography variant="body2" align="center" style={{ color: 'orange' }}>+{props.brand.length - 4}more</Typography>
            </Button>
            <Popover
                id={id}
                open={open} 
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                style={{marginTop:-100}}
            >
                <div style={{float:'right', position: 'sticky', zIndex:1, top: 0, overflow: 'hidden'}}>
                    <Button id="sticky" onClick={() => setAnchorEl(false)} style={{ }}>X</Button>
                </div><br/>
                <div style={{maxWidth:'100%',height:'auto',overflow: 'hidden' }}>
                   <ul style={{columnCount:2}}>
                    {
                        props.brand.map((item, index) => (
                            index < 50 &&
                            <ListItem gutter={false}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            // checked={}
                                            onChange={(e) => props.callBack(e, item)}
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
                    </ul>
                      
                </div>

            </Popover>
        </div>
    );
}
