const { edit, findallbyidcustomer } = require("./orders.repository");

const update = async (id,orderdata) => {
    const order = await edit(id, orderdata);
    return order;
}

const getallbyidcustomer = async (id) => {
    const order = await findallbyidcustomer(id);
    return order;
}

module.exports = {
    update,
    getallbyidcustomer,
}