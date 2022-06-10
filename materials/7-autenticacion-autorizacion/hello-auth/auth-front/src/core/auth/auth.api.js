

const generateAuthPostRequest = user => (
    {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }
)

/**
 * Given a user (email, password y age)
 * @returns 
 */
export const registerAPI = async (user) => {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/register`, generateAuthPostRequest(user));
}


export const validateTokenAPI = async (token) => {
    return await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/validate?token=${token}`)
}


export const loginAPI = async (user) => {
    const r = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, generateAuthPostRequest(user));
    if(!r.ok) throw new Error(r.status);
    return await r.json();
}

