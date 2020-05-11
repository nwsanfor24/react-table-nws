import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.color.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, role, DOB, hobby) {
    return { name, role, DOB, hobby }
}

const rows = [
    createData('Jim Halpert', 'Salesman', 'Oct 20th, 1979', 'Annoy Dwight'),
    createData('Pam Beesly', 'Receptionist', 'March 7th, 1974', 'Making art'),
    createData('Dwight Schrute', 'Salesman', 'Jan 20th, 1966', 'Beet farm'),
    createData('Michael Scott', 'Manager', 'Aug 16th, 1962', 'Dundies'),
    createData('Ryan Howard', 'Temp', 'July 31st, 1979', 'Drugs'),
    createData('Creed Bratton', 'Unknown', 'Feb 8th, 1943', 'Playing guitar')
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function EmployeeDirectory() {
    const classes = useStyles();

    return(
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Employees</StyledTableCell>
                        <StyledTableCell align="right">Role</StyledTableCell>
                        <StyledTableCell align="right">Date of Birth</StyledTableCell>
                        <StyledTableCell align="right">Hobby</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.role}</StyledTableCell>
                            <StyledTableCell align="right">{row.DOB}</StyledTableCell>
                            <StyledTableCell align="right">{row.hobby}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}