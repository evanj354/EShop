const Joi = require('@hapi/joi');

const registerValidation = module.exports.registerValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
                .required()
                .email(),
        password: Joi.string()
                .required()
                .min(6),
        retypePassword: Joi.string()
                .required()
                .min(6)
    });
    return schema.validate(data);
};

const loginValidation = module.exports.loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
                .required()
                .email(),
        password: Joi.string()
                .required()
                .min(6),
    });
    return schema.validate(data);
}

