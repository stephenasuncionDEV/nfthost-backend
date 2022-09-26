const contructCors = (corsOption) => {
    const corsHandler = (req, res, next) => {
        const origin = req.headers.origin;
        const optOrigin = corsOption.origin;

        if(optOrigin.includes(origin) || optOrigin.includes('.nfthost.app')) {
            res.header('Access-Control-Allow-Origin', origin);
        }       
    
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
        next();
    }

    return corsHandler;
}

module.exports = contructCors