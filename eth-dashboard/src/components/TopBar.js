import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DrawerSelect from './DrawerSelect';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appbar: {
      backgroundColor: '#2A3F54'
    }
  }));
const TopBar = ({title}) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <DrawerSelect/>
                    <Typography variant="h6" className={classes.title}>
                    {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopBar