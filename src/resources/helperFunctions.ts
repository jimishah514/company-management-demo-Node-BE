import * as axios from 'axios';
const { employees, offices, tags } = require('../../models');
import { Office }  from '../interfaces/office';
import { Employee } from '../interfaces/employee';
import { Tag } from '../interfaces/tag';

export class helper {
    
    static async getTime() {
        var dt = new Date().getTime();
        return dt;
    }

    static async getEmployees() {
        try {
          const response = await employees.findAll({
              include: [
              {
                attributes: ['name','address'],
                model: offices
              }
            ],
              raw: true,
              nest: true
          })
          if(!response) return {
                message : "no Record Found!"
            }
            return response

        }
        catch (e) {
            console.log("Error Occured While retriving data from database: ", e);
        }
    }

     static async getEmployee(empId:any) {
        try {
           const response = await employees.findOne({
               where: {
                   id: empId
               },
               raw: true
           })
           if(!response) return {
                message : "no Record Found!"
            }
            return response
        }
        catch (e) {
            console.log("Error Occured While retriving data from database: ", e);
        }
    }

    static async getOffices() {
        
        try {
            const response = await offices.findAll({
                raw:true
            })
            if(!response) return {
                message : "no Record Found!"
            }
            return response
        }
        catch (e) {
            console.log("Error Occured While retriving data from database: ", e);
        }
    }

    static async getOffice(officeId:any) {
        try {
            const response = await offices.findOne({
                where: {
                    id: officeId
                },
                raw: true
            })
            if(!response) return {
                message : "no Record Found!"
            }
            return response
        }
        catch (e) {
            console.log("Error Occured While retriving data from database: ", e);
        }
    }


    static async getEmployeeTags(empId:any) {
        try {
            const response = await tags.findAll({
                where: {
                    employeeId: empId
                },
                raw: true
            })
            if(!response) return {
                message : "no Record Found!"
            }
            return response
        }
        catch (e) {
            console.log("Error Occured While retriving data from database: ", e);
        }
    }

    static async addEmployee(employee: Employee) {
        try {
            return await employees.create(employee)
        }
        catch (e) {
            console.log("Error Occured While adding employee to database: ", e);
        }
    }

    static async addOffice(office: Office) {
        try {
            return await offices.create(office)
        }
        catch (e) {
            console.log("Error Occured While adding office to database: ", e);
        }
    }

    static async addTag(tag: Tag) {
        try {
            return await tags.create(tag)
        }
        catch (e) {
            console.log("Error Occured While adding tag to  database: ", e);
        }
    }

    static async updateTag(tagUpdateBody: any) {
        try {
            return await tags.update(
                {tag : tagUpdateBody.tag},
                {where: {
                    id: tagUpdateBody.id
                }}
            )
        }
        catch (e) {
            console.log("Error Occured While adding tag to  database: ", e);
        }
    }
    
}