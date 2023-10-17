'use server'
const url = "https://aula-17-10-main-gilt.vercel.app/";

const getUserAuthenticated = async (user) => {
    const responseOffApi = await fetch(url + "/user/authenticated",
        {
            method:"POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify(user)
        }
    );
    const userAuth = await responseOffApi.json();
    return userAuth;
}

const getUsers = async () => {

}

export { getUsers, getUserAuthenticated };