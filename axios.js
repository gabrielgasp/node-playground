const axios = require('axios').default;

const apiAuthToken = 'azoX8NYQCg6RxjLq7&5AmyN8pCqZJjM9K&^J2Wu&rYBp$TKN*s^3@FXc6a&u9bBz^PwzKb';

const orderStoreId = '6016993ca02c1f9a8f9feec9';

axios
  .get(
    "https://api-v1.mamboo.co.ao/api/v1/order/byOrderStore/6016993ca02c1f9a8f9feec9",
    { headers: { Authorization: apiAuthToken } }
  )
  .then(response => {
    const orderDoc = response.data.data;

    const orderStore = orderDoc.orders_stores.find(os => os._id === orderStoreId);
    console.log(orderStore);
  })
;