const prisma = require('../db');

const findallbyorderid = async (order_id) => {
    const order_items = await prisma.order_items.findUnique({
        where:{
            order_id: order_id,
        },
        include:{
            orders:true,
            products:true,
        }
    })
    return order_items;
}

module.exports = {
    findallbyorderid,
}