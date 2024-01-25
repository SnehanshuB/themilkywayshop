const notFound = (req, res, next) => {
    const error = new Error(`Not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (error, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = error.message;
    
    // Mongoose bad object ID
    if(error.name === 'CastError' && error.kind === 'ObjectId') {
        statusCode = 404;
        message = 'Object not found!';
    }

    res.status(statusCode).json({
        message: message,
        stack: process.env.NODE_ENV === 'production' ? 'NULL - PRD' : error.stack
    });
};

export { notFound, errorHandler };