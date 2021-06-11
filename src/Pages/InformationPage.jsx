import React from 'react'
import { useHistory } from 'react-router'
import TextField from '@material-ui/core/TextField';
import { AppBar, Avatar, Button, makeStyles, Tab, Tabs } from '@material-ui/core';
import TabPanel from '../components/TabPanel';
import WithLoading from '../HOC/WithLoading';


const useStyles = makeStyles((theme) => ({
    root:{
        width: '80%',
        margin: '0 auto',
        minHeight: '70vh',
        display: 'flex',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        '& > *': {
            marginBottom: '2rem'
        }
    },
    avatarContainer: {
      width: '150px',
      minHeight: '150px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginRight: '3rem'
    },
    avatar: {
      width: '150px',
      height: '150px',
      marginBottom: '1rem'
    },
    btn: {
        fontSize: '.65rem'
    },
    btnSelect: {
        color: theme.palette.success.main
    },
    smallInput: {
        width: '30%',
    },
    mediumInput: {
        width: '45%'
    },
    largeInput: {
        width: '90%'
    },
    tabsRoot: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        marginTop: '4rem',
    },
    tabsHeader: {
        flexGrow: 1,
        backgroundColor: '#90E0EF',
    },

}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const InformationPage = ({data, ...props}) => {
    const history = useHistory()

    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const classes = useStyles();

    return (
        <div>
            <button onClick={() => history.push('/')}>back to home</button>
            { data && <div className={classes.root}>
                <div className={classes.avatarContainer}>
                    <Avatar src={data.avatar} className={classes.avatar}/>
                    <Button className={`${classes.btnSelect} ${classes.btn}`}>Select</Button>
                    <Button color="secondary" className={classes.btn}>Delete</Button>
                </div>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id ="standard-basic" label="Accounting Code" className={classes.mediumInput} defaultValue={data.code}/>
                    <TextField id ="standard-basic" label="Company" className={classes.largeInput} inputRef={input => input && input.focus()} defaultValue={data.company}/>
                    <TextField id ="standard-basic" label="Position" className={classes.smallInput} />
                    <TextField id ="standard-basic" label="First name" className={classes.smallInput} defaultValue={data.firstName}/>
                    <TextField id ="standard-basic" label="Last name" className={classes.smallInput} defaultValue={data.lastName}/>
                </form>
                <div className={classes.tabsRoot}>
                    <AppBar position="static" className={classes.tabsHeader}>
                      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="General" {...a11yProps(0)} />
                        <Tab label="Address" {...a11yProps(1)} />
                        <Tab label="Contact" {...a11yProps(2)} />
                      </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                      General
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <form className={classes.form}>
                            <TextField id ="standard-basic" label="Address" className={classes.largeInput} />
                            <TextField id ="standard-basic" label="Country" className={classes.mediumInput} />
                            <TextField id ="standard-basic" label="State" className={classes.mediumInput} />
                            <TextField id ="standard-basic" label="City" className={classes.mediumInput} />
                            <TextField id ="standard-basic" label="Postal Code" className={classes.mediumInput} />

                        </form>

                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Contact
                    </TabPanel>
                </div>
            </div>}
        </div>
    )

}



export default WithLoading(InformationPage, `https://60b4f3d9fe923b0017c83440.mockapi.io/api/v1/users`)


