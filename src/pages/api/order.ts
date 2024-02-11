import { get, post } from ".";



export interface orderInterface {
    userID: String|null;
    type: String ;
    products: 
        {
            title: String;
            img: String;
            price: Number;
            productID: String;
            quantity: Number;
            size:  String;
            color: String
        }[];
    
    price:  Number;
    userInfo: {
      address:  {};
      name: String|null;
      email: String|null;
    },   
    order: {}
    paymentStatus:  Boolean;
  
}

export const sendOrder = (data: orderInterface) => {
    return post<any>('/orders', data);
  };

export const getOrders=(id:string)=>{
    return get<any>(`/orders/user/${id}`)
}