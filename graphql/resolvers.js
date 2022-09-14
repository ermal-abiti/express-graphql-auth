import { createUser, users, login } from "./users.js";
import { protectedQuery } from "./protected.js";

const resolvers = {
    // Auth
    users,
    createUser,
    login,

    // Protected
    protectedQuery,

}

export default resolvers;