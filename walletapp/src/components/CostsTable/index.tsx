import { Box, Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import AddCostsModal from './AddCostsModal';

const CostsTable: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    return (
        <Box padding={5}>
            <Button variant="contained" color="primary" onClick={handleModalOpen}>
                Create new Costs
            </Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <b>#</b>
                            </TableCell>
                            <TableCell>
                                <b>Costs Name</b>
                            </TableCell>
                            <TableCell>
                                <b>Card Series</b>
                            </TableCell>
                            <TableCell>
                                <b>Amount</b>
                            </TableCell>
                            <TableCell>
                                <b>Currency</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <AddCostsModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
            />
        </Box>
    );
}

export default CostsTable;