import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel, Card } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { getAddress } from "../../pages/api/address";
import useSWR from "swr";
import { useAppDispatch } from "../store";

import {  setAddressInCart } from "../store/cartSlice";
const AddressForm: React.FC = () => {
    const { data: address2, error } = useSWR('/user/address', getAddress);
    const [address, setAddress] = useState("");
    const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
    const [showAddAddressForm, setShowAddAddressForm] = useState(false);
    const dispatch=useAppDispatch()
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const handleSelectAddress = (e:any) => {
        setSelectedAddress(e.target.value as string);
        dispatch(setAddressInCart(address2?.address))
    };

    const handleAddAddressClick = () => {
        setShowAddAddressForm(true);
        
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // You can handle form submission here
    };



    return (
        <Box>
            <h2 style={{ color: "#999" }}>Select or Add Address</h2>
            <FormControl fullWidth>
                <InputLabel id="address-select-label" style={{ color: "#bbb" }}></InputLabel>
                <Card>
                <Select
                    labelId="address-select-label"
                    id="address-select"
                    value={selectedAddress}
                    onChange={handleSelectAddress}
                    fullWidth
                    style={{ borderColor: "#F79DA5" }}
                >
                        <MenuItem value="null">{`${address2?.address?.country}-${address2?.address?.city}-${address2?.address?.street}-${address2?.address?.zip}`}</MenuItem>
                  
                </Select>
                </Card>
            </FormControl>
          
            {showAddAddressForm && (
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="new-address"
                        label="New Address"
                        variant="outlined"
                        value={address}
                        onChange={handleAddressChange}
                        fullWidth
                        required
                        margin="normal"
                        style={{ borderColor: "#F79DA5" }}
                    />
                    
                </form>
            )}
            
        </Box>
    );
};

export default AddressForm;
