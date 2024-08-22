const prisma = require("../db");

const insert = async (cartdata) => {
    const cart = await prisma.carts.create({
        data:{
            customer_id: parseInt(cartdata.customer_id),
            product_id: parseInt(cartdata.product_id),
            quantity: parseInt(cartdata.quantity),

        }
    })
    return cart;
}

const edit = async (id, cartdata) => {
    const cart = await prisma.carts.update({
        where:{
            id: parseInt(id)
        },
        data:{
            customer_id: parseInt(cartdata.customer_id),
            product_id: parseInt(cartdata.product_id),
            quantity: parseInt(cartdata.quantity),
        }
    })
    return cart;
}

const deleteid = async (id) => {
    await prisma.carts.delete({
        where:{
            id: parseInt(id)
        }
    });
}

const findall = async () => {
    const cart = await prisma.carts.findMany()
    
    return cart;
}

module.exports ={
    insert,
    edit,
    deleteid,
    findall,
}