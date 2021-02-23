const {Router} = require('express');
const {validation_joi} = require('../validation/validation_joi')

let router = Router();

router.post('', async(req, res) => {
    const{email, password} = req.body
    const result = await validation_joi.validateAsync(req.body)
    console.log(result)
});

module.exports = router;