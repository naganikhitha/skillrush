class ErrorHandler extends Error{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode=statusCode;

    }
}

export const errorMiddleware=(err,req,res,next)=>
{
    err.message=err.message|| "Internal Server Error";
    err.statusCode=err.statusCode||500;
    if(err.name==="CastError")
    {
        const message= `Resource not found`;
        err=new ErrorHandler(message,400);
    }
    if(err.name==="ValidationError")
    {
        const ValidationErrors=Object.values(error.errors).map(err=>err.message);
        return next(new ErrorHandler(ValidationErrors.join(","),400));
    }
    return res.status(err.statusCode).json({
        success:false,
        message: err.message,
    });
};

export default ErrorHandler;