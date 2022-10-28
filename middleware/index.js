export default function (req, res, next) {
    console.log('api middleware');
    res.send({
        message: 'api middleware'
    })

    next()
}