import authCheck from './helpers/authCheck.js';

export const protectedQuery = async (args, request) => {
    authCheck(request)
    return `You are accessing protected query as "${request.user.username}"`;
}