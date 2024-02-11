import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Cancel, HourglassEmpty, CheckCircle } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import useSWR from "swr";
import { getOrders } from '../../pages/api/order';
import OrderList from './OrderComponent';
import { Box } from '@mui/material';
const ordersData = [
  { id: 1, status: 'processing', description: 'Order 1 - Processing' },
  { id: 2, status: 'cancelled', description: 'Order 2 - Cancelled' },
  { id: 3, status: 'received', description: 'Order 3 - Received' },
];

const OrdersComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const userId=localStorage.getItem('userId');
  const { data: orders, error } = useSWR(`/orders/user/${userId}`,getOrders(userId) );
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const forder=[]
 const filterOrders = (status) => forder?.filter(order => order?.order?.status === status);

  return (
    <Box>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            diplay:"flex",
            flexDirection:"row",
            
              '& .Mui-selected': {
                  color: '#f79da5',
                },
                '& .MuiTabs-indicator': {
                    backgroundColor: '#f79da5',
                  },
          }}
        >
          <Tab sx={{mx:"20px"}} label="not paid" icon={<HourglassEmpty />} />
          <Tab sx={{mx:"20px"}} label="Cancelled" icon={<Cancel />} />
          <Tab sx={{mx:"20px"}} label="Received" icon={<CheckCircle />} />
        </Tabs>
        <List>
          {selectedTab === 0 && orders?.map(order => (
            <ListItem key={order.id}>
              <OrderList order={order}/>

            </ListItem>
          ))}
          {selectedTab === 1 && filterOrders('cancelled')?.map(order => (
            <ListItem key={order.id}>
              <ListItemText primary={order.description} />
            </ListItem>
          ))}
          {selectedTab === 2 && filterOrders('received')?.map(order => (
            <ListItem key={order.id}>
              <ListItemText primary={order.description} />
            </ListItem>
          ))}
        </List>
        </Box>
  );
};

export default OrdersComponent;
