import dbc from '../dbc';


export async function register(body){
    try {
        const db= await dbc.connectDatabase()
        const {email, password, name }= body
        const userExist =  await db.collection('users').find({email}).toArray();
        if(userExist.length>0){
            throw "User Already Exist."
        }
        let register =  await db.collection('users').insert({email,password, name});
        return register;
    } catch (error) {
        console.log(error)
        return error
    }
} 