import Joi from 'joi'
// ..stuff below

const user = {
//REgiser Validatiion
registerValidation:(data) => {
    const schema = {
        name: Joi.string().
            min(6).
            required(),
        email: Joi.string().
            min(6).
            required().
            email(),
        password: Joi.string().
            min(6).
            required()
    }
    return Joi.validate(data, schema)
},

//login validation
loginValidation : (data) => {
    const schema = {
        email: Joi.string().
            min(6).
            required().
            email(),
        password: Joi.string().
            min(6).
            required()
    }
    return Joi.validate(data, schema)
}

}
export default user;


