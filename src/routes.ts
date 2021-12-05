import { Router, Request, Response } from "express";
import MessageController from "./controllers/MessageController";
import SettingsController from "./controllers/SettingsController";
import UserController from "./controllers/UserController";

const routes = Router();

/** BEGIN: SETTINGS ROUTES */
routes.post("/settings", SettingsController.create);
/** END: SETTINGS ROUTES */

/** BEGIN: USER ROUTES */
routes.post("/user", UserController.create);
/** END: USER ROUTES */

/** BEGIN: MESSAGES ROUTES */
routes.post("/message", MessageController.create);
routes.get("/messages/:id", MessageController.getAllByUser);
/** END: MESSAGES ROUTES */


/* BEGIN: VIEW ROUTES */
routes.get("/", (request: Request, response: Response) => {
	response.locals = {
		title: "Chat",
	};
	return response.render("index", { user: "matts" });
});	
/* END: VIEW ROUTES */

export default routes;