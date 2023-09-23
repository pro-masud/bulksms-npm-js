export const ageCkecker = (req, res, next) => {
    console.log("middlewares checker now");
    if(req.body.age > 21){
        next();
    }else{
        res.json({ "Message" : "You Not Aellowed This Apps?"});
    }
} 