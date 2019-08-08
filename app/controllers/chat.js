module.exports.initChat = function(applicarion, req, res, validationResult){
    var dataForm = req.body;

    var errors = validationResult(req);

    if(!errors.isEmpty()){
         res.render('index', { validacao: errors.array()});
         return false;
      }

    res.render('chat');
}