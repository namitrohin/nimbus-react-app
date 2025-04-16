export const getAuthUser = () => {
    return sessionStorage.getItem("auth") ? JSON.parse(sessionStorage.getItem("auth")) : null;
};