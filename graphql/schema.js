import { buildSchema } from "graphql";

const schema = buildSchema(`
    # Types
    type User {
        username: String!
        token: String
    }

    # Inputs
    input UserInput {
        username: String!
        password: String!
    }

    # Queries
    type Query {
        users: [User]
        user(id: String): User
        login(input: UserInput): User
        protectedQuery: String
    }

    # Mutations
    type Mutation {
        createUser(input: UserInput): User
    }
`);

export default schema;