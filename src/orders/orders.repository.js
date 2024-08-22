const prisma = require("../db");
const { deletecart } = require("../carts/carts.service");



const edit = async (id, orderdata) => {
    const order = await prisma.orders.update({
        where:{
            id: parseInt(id)
        },
        data:{
            status: orderdata.status,
        }
    })
    await deletecart(id)
    return order;
}

const findallbyidcustomer = async (customer_id) => {
    const order = await prisma.orders.findUnique({
        where:{
            customer_id:customer_id,
        }
    })
    return order;
}
module.exports ={
    edit,
    findallbyidcustomer,
}