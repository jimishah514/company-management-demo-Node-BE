import { Router } from 'express';
import { commonController } from '../controllers/common';
import { requireAuthUser } from '../middlewares/auth';

export const router = Router();

router.get("/",
   requireAuthUser(),
   commonController.getHelloWorld);

router.get("/employees",
   requireAuthUser(),
   commonController.getEmployees);

router.get("/employees/:id",
   requireAuthUser(),
   commonController.getEmployee);

router.get("/offices",
   requireAuthUser(),
   commonController.getOffices);

router.get("/offices/:id",
   requireAuthUser(),
   commonController.getOffice);

router.get("/employeetags",
   requireAuthUser(),
   commonController.getEmployeeTags);

router.post("/employee",
   requireAuthUser(),
   commonController.addEmployee);

router.post("/office",
   requireAuthUser(),
   commonController.addOffice);

router.post("/tag",
   requireAuthUser(),
   commonController.addTag);

router.patch("/tag",
   requireAuthUser(),
   commonController.updateTag);
