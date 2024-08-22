const prisma = require("../db");

const insert = async (orderdata) => {
    const order = await prisma.orders.create({
        data:{
            customer_id: parseInt(orderdata.customer_id),
            total_price: orderdata.total_price,
            status: orderdata.status,
        }
    })
    return order;
}

const edit = async (id, orderdata) => {
    const order = await prisma.orders.update({
        where:{
            id: parseInt(id)
        },
        data:{
            customer_id: parseInt(orderdata.customer_id),
            total_price: orderdata.total_price,
            status: orderdata.status,
        }
    })
    return order;
}

const deleteid = async (id) => {
    await prisma.orders.delete({
        where:{
            id: parseInt(id)
        }
    });
}

const findall = async (total_price) => {
    const order = await prisma.orders.findMany({
        // where:{
        //     total_price:{
        //         contains: total_price,
        //     }
        // },
        // include:{
        //     order_items:true,
        // }
    })
    return order;
}
module.exports ={
    insert,
    edit,
    deleteid,
    findall,
}