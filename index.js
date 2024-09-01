import express from "express";
import { validCredentials, errorHandle } from "./registrationHandle.js";

const app = express();
const hostname = "127.0.0.1";
const port = 4000;

app.use(express.json());

app.get("/users", (req, res) => {
    res.send("Hello");
});

app.post("/register", validCredentials, (req, res) => {
    res.status(201).json({ message: "Registration Successful" });
});

app.use(errorHandle);

app.listen(port, hostname, () => {
    console.log("Server is running at port: " + port);
});
