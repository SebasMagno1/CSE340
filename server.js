const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

// Configurar EJS
app.set("view engine", "ejs");

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta Home
app.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    });
});

// Ruta Organizations
app.get("/organizations", (req, res) => {
    res.render("organizations", {
        title: "Organizations"
    });
});

// Ruta Projects
app.get("/projects", (req, res) => {
    res.render("projects", {
        title: "Projects"
    });
});

// Ruta Categories
app.get("/categories", (req, res) => {
    res.render("categories", {
        title: "Categories"
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});