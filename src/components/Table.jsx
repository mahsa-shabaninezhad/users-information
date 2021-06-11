import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Avatar } from '@material-ui/core';
import { useHistory } from 'react-router';

//Styles
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: "90vh",
  },
  table: {
    minWidth: 650,
    borderColor: "#90E0EF",
    borderColor:  theme.palette.info.light
  },
  table__row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#90E0EF',
      
    }
  },
  avatar: {
    margin: '0 auto'
  },
}));

//Styling odd rows differently
const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: '#CAF0F8',
        '&:hover': {
          backgroundColor: '#90E0EF',
        }
    },
  },
})
)(TableRow);

export default function BasicTable({data}) {

    const history = useHistory()

    const classes = useStyles();

    //Table headers
    const headers = ['#','First name','Last name','Company','Email','Phone', 'Code', 'Avatar']

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table" className={classes.table}>
                  <TableHead>
                    <TableRow>
                        {
                          headers.map(header => <TableCell align="center">{header}</TableCell>)
                        }
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.map((row) => (
                      <StyledTableRow className={classes.table__row} key={row.id} onClick={() => history.push(`/${row.id}`)}>
                        <TableCell component="th" scope="row" align="center">
                          {row.id}
                        </TableCell>
                        <TableCell align="center">{row.firstName}</TableCell>
                        <TableCell align="center">{row.lastName}</TableCell>
                        <TableCell align="center">{row.company}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.phone}</TableCell>
                        <TableCell align="center">{row.code}</TableCell>
                        <TableCell align="center"><Avatar className={classes.avatar} src={row.avatar}/></TableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
} 
 