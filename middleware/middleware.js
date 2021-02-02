export function middleware (req, res, next) {
    req.time = Date.now()
    // let obj = {
    //     test: 'test'
    // }
    next()
}

