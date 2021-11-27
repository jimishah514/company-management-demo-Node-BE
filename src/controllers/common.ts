import {NextFunction, Request, Response} from 'express';
import { companyApi} from '../resources/companyApi';
import { Office } from '../interfaces/office';
import { Employee } from '../interfaces/employee';
import { Tag } from '../interfaces/tag';

export class commonController {
    static getHelloWorld(req:Request,res:Response,next:NextFunction) {
        res.send({message : "Welcome to Backend Api"});
    }
  
    static async getEmployees(req:Request,res:Response,next:NextFunction) {
        const employees = await companyApi.getEmployees();  
        if(employees !== -1) {
            res.send(employees);
        } else {
            res.send('Error Occured');
        }
    }

    static async getEmployee(req:Request,res:Response,next:NextFunction) {
        const { id } = req.params
        const employee = await companyApi.getEmployee(id);  
        if(employee !== -1) {
            res.send(employee);
        } else {
            res.send('Error Occured');
        }
    }

    static async getOffices(req:Request,res:Response,next:NextFunction) {
        const params = req.params
        const offices = await companyApi.getOffices();  
        if(offices !== -1) {
            res.send(offices);
        } else {
            res.send('Error Occured');
        }
    }

    static async getOffice(req:Request,res:Response,next:NextFunction) {
        const params = req.params
        const office = await companyApi.getOffice(params.id);  
        if(office !== -1) {
            res.send(office);
        } else {
            res.send('Error Occured');
        }
    }

    static async getEmployeeTags(req:Request,res:Response,next:NextFunction) {
        const { employeeId } = req.query
        const tags = await companyApi.getEmployeeTags(employeeId);  
        if(tags !== -1) {
            res.send(tags);
        } else {
            res.send('Error Occured');
        }
    }

    static async addEmployee(req:Request,res:Response,next:NextFunction) {
        let employeeBody = req.body
        if(!employeeBody.firstName) res.send({
            message: "Employee firstName not provided!"
        })
        if(!employeeBody.lastName) res.send({
            message: "Employee lastName not provided!"
        })
        if(!employeeBody.phone) res.send({
            message: "Employee phone not provided!"
        })
        if(!employeeBody.birthDate) res.send({
            message: "Employee birthDate not provided!"
        })
        if(!employeeBody.officeId) res.send({
            message: "Employee officeId not provided!"
        })
        const employee = await companyApi.addEmployee(employeeBody);  
        if(employee !== -1) {
            res.send(employee);
        } else {
            res.send('Error Occured');
        }
    }

    static async addOffice(req:Request,res:Response,next:NextFunction) {
        const officeBody: Office = req.body
        if(!officeBody.name) res.send({
            message: "office name not provided!"
        })
        const office = await companyApi.addOffice(officeBody);  
        if(office !== -1) {
            res.send(office);
        } else {
            res.send('Error Occured');
        }
    }

    static async addTag(req:Request,res:Response,next:NextFunction) {
        const tagBody: Tag = req.body
        if(!tagBody.employeeId) res.send({
            message: "EmployeeId not provided!"
        })
        if(!tagBody.tag) res.send({
            message: "Tag not provided!"
        })
        const tag = await companyApi.addTag(tagBody);  
        if(tag !== -1) {
            res.send(tag);
        } else {
            res.send('Error Occured');
        }
    }

    static async updateTag(req:Request,res:Response,next:NextFunction) {
        const tagUpdateBody= req.body
        if(!tagUpdateBody.employeeId) res.send({
            message: "EmployeeId not provided!"
        })
        if(!tagUpdateBody.tag) res.send({
            message: "Tag not provided!"
        })
        const tag = await companyApi.updateTag(tagUpdateBody);  
        if(tag !== -1) {
            res.send(tag);
        } else {
            res.send('Error Occured');
        }
    }

    
 
}


