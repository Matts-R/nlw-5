import { httpServer} from "./http";
import "./websocket/client"

httpServer.listen(3000, () => {
	console.log("Running on http://localhost:3000");
});

//time 23:12