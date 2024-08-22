const { insert, edit, deleteid } = require("./users.repository");

const create = async (userdata) => {
    const user = await insert(userdata);
    return user;
}

const update = async (id, userdata) => {
    const user = await edit(id, userdata);
    return user;
}

const deleteuser = async (id) => {
    await deleteid(id)
}

module.exports ={
    create,
    update,
    deleteuser,
}