const prisma = require("../db");

const insert = async (productdata) => {
    const product = await prisma.products.create({
        data:{
            seller_id: parseInt(productdata.seller_id),
            name: productdata.name,
            description: productdata.description,
            price: productdata.price,
            stock: productdata.stock
        }
    })
    return product;
}

const edit = async (id, productdata) => {
    const product = await prisma.products.update({
        where:{
            id: parseInt(id)
        },
        data:{
            seller_id: parseInt(productdata.seller_id),
            name: productdata.name,
            description: productdata.description,
            price: productdata.price,
        }
    })
    return product;
}

const deleteid = async (id) => {
    await prisma.products.delete({
        where:{
            id: parseInt(id)
        }
    });
}

const findall = async (name) => {
    const product = await prisma.products.findMany({
        where:{
            name:{
                contains: name,
            }
        },
        include:{
            order_items:true,
        }
    })
    return product;
}

const findallbyid = async (id) => {
    const product = await prisma.products.findUnique({
        where:{
            id: id
        },
        include:{
            order_items:true,
        }
    })
    return product
}

module.exports ={
    insert,
    edit,
    deleteid,
    findall,
    findallbyid,
}