//Apollo Server
import { ApolloServer } from '@apollo/server';
import sequelize from "../db/index.js"
import { startStandaloneServer } from '@apollo/server/standalone';
import userModel from '../db/models/user.model.js';
import { typeDefs } from '../graphql/typeDefs/index.js';
import { resolvers } from '../graphql/resolvers/index.js';


const server = new ApolloServer({

    typeDefs: typeDefs,
    resolvers: resolvers,

});

// Inicializate Apollo Server Port 4000
const { url } = await startStandaloneServer(server, {

    listen: { port: 4000 }

});
console.log(`🚀  Server ready at: ${url}`);

try {
    //Establsh conex with DB
    await sequelize.authenticate();
    //Migrate Models To Database
    userModel(sequelize)
    //Force Restore Table in DB
    //sequelize.models.User.sync({force: true})

    console.log('Connection to DB ElephatSQL has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
