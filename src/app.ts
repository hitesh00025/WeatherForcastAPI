import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index";
import { errorHandler } from './middleware/error';
import swaggerUi from 'swagger-ui-express';
import { openapiSpec } from './docs/swagger';
dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", routes);

app.get("/", (_req, res) => {
  res.send("🚀 Node.js + TypeScript Starter Running!");
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiSpec));
app.use(errorHandler);


export default app;