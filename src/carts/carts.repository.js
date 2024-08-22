const prisma = require("../db");

const insert = async (cartdata) => {
    const cart = await prisma.carts.create({
        data:{
            customer_id: parseInt(cartdata.customer_id),
            product_id: parseInt(cartdata.product_id),
            quantity: parseInt(cartdata.quantity),

        }
    });

    const cartItems = await prisma.carts.findMany({
        where: { customer_id: cart.customer_id},
        include:{
            products: true
        }
    });

    let totalPrice = 0;
    cartItems.forEach(item =>{
        totalPrice += item.quantity * item.products.price; 
    });

    const order = await prisma.orders.create({
        data:{
            customer_id: cart.customer_id,
            total_price: totalPrice,
            status: 'Pending',
        }
    })

    for (const item of cartItems){
        await prisma.order_items.create({
            data:{
                order_id: order.id,
                product_id: item.product_id,
                quantity: item.quantity,
                price: item.products.price
            }
        });

        await prisma.products.update({
            where: { id: item.product_id},
            data:{
                stock:{
                    decrement: item.quantity,
                }
            }
        })
    }
    return order;
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

const findall = async (customer_id) => {
    const cart = await prisma.carts.findUnique({
        where:{
            customer_id: customer_id,
        },
        include:{
            products:true
        }
    })
    
    return cart;
}

module.exports ={
    insert,
    edit,
    deleteid,
    findall,
}