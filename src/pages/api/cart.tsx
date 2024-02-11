import { post } from ".";

export const sendPurchase = (data:  {
 
    userID: { type: String },
    products: [
        {
            productID: {type: string},
            size: { type: String},
            color: { type: String },
            quantity: {type: Number},
        }
    ]   
  }) => {
    return post<{ msg: string }>('/cart/', data);
  };