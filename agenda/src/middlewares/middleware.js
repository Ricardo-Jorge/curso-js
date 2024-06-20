exports.middlewareGlobal = (request, response, next) => {
    response.locals.localVariable = 'Teste de uma variável local.';
    next();
};

exports.checkCsrfError = (err, request, response, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return response.render('404');
    }
};

exports.csrfMiddleware = (request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
}