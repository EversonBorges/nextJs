export default function handle(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id:codigo,
        nome:`João ${codigo}`,
        email:`joao${codigo}@email.com`
    })
}