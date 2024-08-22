const { findallbyorderid } = require('./order_items.repository');

const getallbyorderid = async (order_id) => {
    const order_items = await findallbyorderid(order_id);
    return order_items;
}

module.exports ={
    getallbyorderid,
}