module.exports.initChat = function(application, req, res, validationResult){
    var dataForm = req.body;

    var errors = validationResult(req);

    if(!errors.isEmpty()){
         res.render('index', { validacao: errors.array()});
         return false;
      }

    application.get('io').emit(
      'notification_on',
      {apelido: dataForm.apelido, msg: ' acabou de entrar no chat'}
    );

    res.render('chat');
}