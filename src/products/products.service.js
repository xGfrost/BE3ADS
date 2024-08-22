const { insert, edit, deleteid, findall, findallbyid } = require("./products.repository");

const create = async (productdata) => {
    const product = await insert(productdata);
    return product;
}

const update = async (id, productdata) => {
    const product = await edit(id, productdata);
    return product;
}

const deleteproduct = async (id) => {
    await deleteid(id)
}

const getall = async (name) => {
    const product = await findall(name)
    return product;

}

const getallbyid = async (id) => {
    const product = await findallbyid(id);
    return product(id);
}

module.exports ={
    create,
    update,
    deleteproduct,
    getallbyid,
    getall,
}