export default function (req, res, next) {
    console.log('api middleware');
    next()
}