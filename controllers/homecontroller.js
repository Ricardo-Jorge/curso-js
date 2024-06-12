exports.paginaInicial = (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome do Cliente: <input type="text" name="nome"><br>
        Outro campo: <input type="text" name="aquioutrocampo">
        <button>Enviar Meu formulario</button>
        </form>
        `);
};

exports.trataPost = (request, response) => {
    response.send('Nova rota de POST.');
}