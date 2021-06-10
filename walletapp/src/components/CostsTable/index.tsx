import { Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';

const CostsTable: React.FC = () => {

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><br>#</br></TableCell>
                        <TableCell><br>Costs Name</br></TableCell>
                        <TableCell><br>Selected Card</br></TableCell>
                        <TableCell><br>Amount</br></TableCell>
                        <TableCell><br>Currency</br></TableCell>
                    </TableRow>
                </TableHead>
            </Table>
        </TableContainer>
    );
}

export default CostsTable;