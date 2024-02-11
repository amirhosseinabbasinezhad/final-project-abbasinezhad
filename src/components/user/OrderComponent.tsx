import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemAvatar, Avatar, Box } from '@mui/material';
import Detail from './OrderDetail';

const OrderList = ({ order }: { order: any }) => {
  return (
    <div>
      <Card key={order._id} sx={{minWidth:"100%"}}>
        <CardContent sx={{minWidth:"100%" ,padding:"15px 80px 0 15px"} } >
        <Box sx={{display:"flex",flexDirection:"row"}}>
        <Typography variant="body2" component="h2" sx={{display:"inline"}}>
            status: 
          </Typography>
          <Typography variant="body2" component="h2" color="#FFCC00">
            pending                             
          </Typography>
        </Box>
          <Typography variant="body2" component="h2">
            Order code: {order._id}
          </Typography>
          <Box sx={{display:"flex",flexDirection:"row"}}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Order Price: ${order.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Date of Order: {new Date(order.createdAt).toLocaleDateString()}
          </Typography></Box>
          <Detail order={order} />
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderList;
