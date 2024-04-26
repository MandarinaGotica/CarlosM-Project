import { TOKEN_KEY } from "../../config/index.js"
import { getUser } from "./user.services.js"
import jwt from "jsonwebtoken"

export const authenticateUser = async (email: String, password: String) => {
    //Obtain data of user for auth
    const user: any = await getUser(email)

    //auth process
    try {
        if (user.email === email && user.password === password) {//User verified
            /* const token = jwt.sign(
                {
                    email,
                    password,
                },
                TOKEN_KEY,
                { expiresIn: '1h' }//Duration of token is 1 hour
            ) */
            return user
        }else{
            return null
        }
    } catch (e) {
        //throw new Error("Has error ocurred! " + e);
        return null
    }

}