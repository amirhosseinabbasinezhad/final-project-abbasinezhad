import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { addAddress, getAddress } from '../../pages/api/address';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
});

interface FormData {
    street: String;
    city: String;
    state: String;
    zip: String;
    country: String;
    mobile: String;
  }

const AddressForm = () => {
  const [formData, setFormData] = useState<FormData>({
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    mobile: '',
  });
  const { data: address2, error } = useSWR('/user/address', getAddress);
  useEffect(()=>{
    if(address2?.ok){
        setFormData({...address2?.address,mobile:address2?.address?.mobile?.toString()})
    }
  },[address2])
  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(event:any) => {
    event.preventDefault();
    try {
        const response = await addAddress({...formData,mobile:Number(formData?.mobile)});
        const data = await response;
        toast.success(`address added ...}`);
        
        //console.log(data); 
      } catch (error) {
        toast.error(`error:${error}`)
        //console.error("Error:", error); // Handle any errors that occurred during the fetch
      }
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="Street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
            error={!formData.street}
            helperText={!formData.street && 'Street cannot be empty!'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            error={!formData.city}
            helperText={!formData.city && 'City cannot be empty!'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            error={!formData.state}
            helperText={!formData.state && 'State cannot be empty!'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="Zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            error={!formData.zip}
            helperText={!formData.zip && 'Zip cannot be empty!'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            error={!formData.country}
            helperText={!formData.country && 'Country cannot be empty!'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTextField
            fullWidth
            label="Mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            error={!formData.mobile}
            helperText={!formData.mobile && 'Mobile cannot be empty!'}
          />
        </Grid>
        <Grid dir="rtl" item xs={12}>
          <Button disabled={address2?.ok} className='paynowbtn'sx={{padding:"12px" ,marginBottom:"25vh"}} color="secondary" type="submit" variant="contained" >
            Submit address
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressForm;
