const authCheck = (request) => {
    if (!request.isAuth) {
        throw new Error('Not Authorized');
    }
} 

export default authCheck;