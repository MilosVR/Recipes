import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import React, { Component } from 'react'

export default class Calories extends Component {
  render() {
    return (
        <Paper >
      <Table >
        <TableHead>
          <TableRow>
            <TableCell style={{background:'orange', color:'white', border:'3px solid'}}>Dessert (100g serving)</TableCell>
            <TableCell numeric style={{background:'orange', color:'white', border:'2px solid'}}>Calories</TableCell>
            <TableCell numeric style={{background:'orange', color:'white', border:'2px solid'}}>Fat (g)</TableCell>
            <TableCell numeric style={{background:'orange', color:'white', border:'2px solid'}}>Carbs (g)</TableCell>
            <TableCell numeric style={{background:'orange', color:'white', border:'2px solid'}}>Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>  
              <TableRow >
              <TableCell >Value</TableCell>  
                <TableCell numeric>298</TableCell>
                <TableCell numeric>15.6</TableCell>
                <TableCell numeric>38.8</TableCell>
                <TableCell numeric>8.5</TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </Paper>
    )
  }
}
