const express = require("express");
const { ApolloServer } = require("@apollo/server");
const bodyParser = require("body-parser");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/exp")


async function startServer() {
    const app = express();
    const server = new ApolloServer();

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();
    app.use("/graphql", expressMiddleware(server))


    app.listen(8000, () => console.log("sever started at port 8000 "))
}