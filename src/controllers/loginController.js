const Login = require('../models/loginModel')

exports.index = (request, response) => {
    response.render('login');
}; 

exports.register = async function(request, response) {
    try {
        const login = new Login(request.body)
        await login.register();  
    
        if(login.errors.length > 0) {
            request.flash('errors', login.errors);
            request.session.save(function() {
                return response.redirect('/login/index');
            });
            return;
        }
            request.flash('success', 'Seu usuário foi criado com sucesso.');
            request.session.save(function() {
            return response.redirect('/login/index');
        });
    } catch(e) {
        console.log(e)
       return response.render('404');
    }
};