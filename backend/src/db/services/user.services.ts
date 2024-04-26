import sequelize from "../index.js"

export const getUsers = async () => {
    try {
        let user = await sequelize.models.User.findAll()
        return user
    } catch (e) {
        throw new Error("Has ocurred an error / " + e);
    }

}

export const getUser = async (email: String) => {
    try {
        //let users: any = await sequelize.models.User.findAll()
        //return users.filter(user => user.email === email)[0]
        let users = await sequelize.models.User.findAll({where: {email: email}})
        return users[0]
    } catch (e) {
        throw new Error("Has ocurred an error / " + e);
    }

}

export const insertUser = async (args) => {
    try {
        return await sequelize.models.User.create(args)
    } catch (e) {
        throw new Error("Has ocurred an error, verify fields. Remember that emails can't be duplicated / " + e);
    }

}

export const updateUser = async (args) => {
    //const {password}: any = await sequelize.models.User.findByPk(args.id)
    //console.log(password)
    const { id, name, role, email } = args
    try {
        await sequelize.models.User.update(
            { name, role, email },
            {
                where: {
                    id
                }
            }
        )
        return await sequelize.models.User.findByPk(id)
    } catch (e) {
        throw new Error("Has ocurred an error, verify fields. Remember that emails can't be duplicated / " + e);
    }

}

export const deleteUser = async (args) => {
    const { id, name, role, password, email } = args
    try {
        await sequelize.models.User.destroy(
            {
                where: {
                    id
                }
            }
        )
        return { id, name, role, password, email }
    } catch (e) {
        throw new Error("Has ocurred an error / " + e);
    }

}