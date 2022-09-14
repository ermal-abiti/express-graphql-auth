import express from 'express';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
import isAuth from './middleware/isAuth.js'; 
import { connectToMongo } from './db.js';
dotenv.config();

const app = express();
app.use(express.json());

// Auth middleware
app.use(isAuth);

// Graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql:true,
}));

connectToMongo();
app.listen(5050, ()=> console.log("running at http://localhost:5050"))