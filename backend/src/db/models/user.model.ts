import { Sequelize, DataTypes, Model } from "sequelize";

export default function (sequelize) {
    class UserModel extends Model { }

    UserModel.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true //Just allow unique email
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize, //info conex to db
            modelName: 'User', // name of model or table en db
        },
    )
}