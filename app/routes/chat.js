const { check, validationResult } = require('express-validator');

module.exports = function(application){
    application.post('/chat', [
        check('apelido').not().isEmpty().withMessage('o apelido é obrigatorio'),

    ], function(req, res){
        application.app.controllers.chat.initChat(application, req, res, validationResult);
    });

    application.get('/chat', function(req, res){
        res.send('apelido obrigatorio');
        // application.app.controllers.chat.initChat(application, req, res);
    });
}