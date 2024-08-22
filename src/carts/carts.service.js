const { insert, edit, deleteid } = require("./carts.repository");

const create = async (cartdata) => {
    const cart = await insert(cartdata);
    return cart;
}

const update = async (id, cartdata) => {
    const cart = await edit(id, cartdata);
    return cart;
}

const deletecart = async (id) => {
    await deleteid(id)
}

const getall = async () => {
    const cart = await findall()
    return cart;

}



module.exports ={
    create,
    update,
    deletecart,
    getall,
}