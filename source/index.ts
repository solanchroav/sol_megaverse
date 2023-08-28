import {PORT as PORTCONFIG } from "./config/appConfig";
import {setupSwaggerDocs  as V1SwaggerDocs} from "./infrastructure/v1/swagger";
import createServer from "./infrastructure/utils/server";

const app = createServer();

const PORT = PORTCONFIG;

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
    V1SwaggerDocs(app, PORT);
})

