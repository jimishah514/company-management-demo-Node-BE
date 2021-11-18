import {Request,Response,NextFunction} from 'express';
const authenticated = true;
export function requireAuthUser() {
    console.log("AuthUser Middleware")
    if(authenticated) {
        return (req: Request,res: Response, next: NextFunction) => {
            next();
        }
    }
    else return (req: Request,res: Response, next: NextFunction) => {
        res.send("Not Authenticated");
    }
}