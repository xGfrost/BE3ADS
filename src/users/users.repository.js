const prisma = require("../db");

const insert = async (userdata) => {
    const user = await prisma.users.create({
        data:{
            username: userdata.username,
            password: userdata.password,
            email: userdata.email,
            role: userdata.role,
        }
    })
    return user;
}

const edit = async (id, userdata) => {
    const user = await prisma.users.update({
        where:{
            id: parseInt(id)
        },
        data:{
            username: userdata.username,
            password: userdata.password,
            email: userdata.email,
            role: userdata.role,
        }
    })
    return user;
}

const deleteid = async (id) => {
    await prisma.users.delete({
        where:{
            id: parseInt(id)
        }
    });
}

module.exports ={
    insert,
    edit,
    deleteid,
}