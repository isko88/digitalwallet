import React from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

interface IPropsModal {
    isOpen: boolean;
    onClose: () => void;
}

const AddCostsModal: React.FC<IPropsModal> = ({ isOpen, onClose }) => {
    const [costsName, setCostsName] = React.useState('');
    const [cardNum, setCardNum] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [currency, setCurrency] = React.useState('');


    const handleSubmit = () => {
        //dispatch
        onClose();
    }


    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Create new Costs</DialogTitle>
            <DialogContent>
                <Box mb={4}>
                    <TextField
                        label="Costs Name"
                        variant="outlined"
                        value={costsName}
                        onChange={(evt) => setCostsName(evt.target.value)}
                    />
                </Box>
                <Box mb={4}>
                    <TextField
                        label="Card Series"
                        variant="outlined"
                        value={cardNum}
                        onChange={(evt) => setCardNum(evt.target.value)}
                    />
                </Box>
                <Box mb={4}>
                    <TextField
                        type="number"
                        label="Amount"
                        variant="outlined"
                        value={amount}
                        onChange={(evt) => setAmount(evt.target.value)}
                    />
                </Box>
                <Box mb={4}>
                    <TextField
                        label="Currency"
                        variant="outlined"
                        value={currency}
                        onChange={(evt) => setCurrency(evt.target.value)}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleSubmit} color="primary">
                    Create
            </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddCostsModal;