import { helper } from './helperFunctions';
import { Office } from '../interfaces/office';
import { Employee } from '../interfaces/employee';
import { Tag } from '../interfaces/tag';

export class companyApi {
    static async getEmployees() {
        try {
            return  await helper.getEmployees()
        } catch {
            throw Error("Error Occured while getting Employees list");
            return -1;
        }
    }

    static async getEmployee(empId: any) {
        try {
            return  await helper.getEmployee(empId)
        } catch {
            throw Error("Error Occured while getting Employee by Id");
            return -1;
        }
    }

    static async getOffices() {
        try {
            return  await helper.getOffices()
        } catch {
            throw Error("Error Occured while getting Offices list");
            return -1;
        }
    }

    static async getOffice(officeId: any) {
        try {
            return  await helper.getOffice(officeId)
        } catch {
            throw Error("Error Occured while getting Office by Id");
            return -1;
        }
    }

    static async getEmployeeTags(empId: any) {
        try {
            return  await helper.getEmployeeTags(empId)
        } catch {
            throw Error("Error Occured while getting tag by employeeTags");
            return -1;
        }
    }

    static async addEmployee(employeeBody: Employee) {
        try {
            return  await helper.addEmployee(employeeBody)
        } catch {
            throw Error("Error Occured while adding Employee.");
            return -1;
        }
    }

    static async addOffice(officeBody: Office) {
        try {
            return  await helper.addOffice(officeBody)
        } catch {
            throw Error("Error Occured while adding Office.");
            return -1;
        }
    }

    static async addTag(tagBody: Tag) {
        try {
            return  await helper.addTag(tagBody)
        } catch {
            throw Error("Error Occured while adding Tag.");
            return -1;
        }
    }

    static async updateTag(tagUpdateBody: any) {
        try {
            return  await helper.updateTag(tagUpdateBody)
        } catch {
            throw Error("Error Occured while updating Tag.");
            return -1;
        }
    }
    
    
}




