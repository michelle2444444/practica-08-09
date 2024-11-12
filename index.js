const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Datos de los integrantes
const integrantes = [
    {
        "id": 1,
        "nombre": "Michelle",
        "apellido": "Suarez",
        "edad": 20,
        "pasatiempo": "Jugar Futbol"
    },
    {
        "id": 2,
        "nombre": "Marlon",
        "apellido": "Nicolalde",
        "edad": 20,
        "pasatiempo": "Jugar Bagminton"
    },
    {
        "id": 3,
        "nombre": "Isaac",
        "apellido": "Quinapallo",
        "edad": 20,
        "pasatiempo": "Jugar Voleibol"
    },
    {
        "id": 4,
        "nombre": "Joseph",
        "apellido": "Caza",
        "edad": 20,
        "pasatiempo": "Jugar Baseball"
    }
];

// Ruta GET para la información del grupo de trabajo
app.get('/', (req, res) => {
    res.send("Landing page - Grupo 3");
});

// Ruta GET para presentar la información de los integrantes
app.get('/integrantes', (req, res) => {
    res.json(integrantes);
});

// Ruta GET para presentar la información de un integrante por su ID
app.get('/integrantes/:id', (req, res) => {
    const integranteId = parseInt(req.params.id);
    const integrante = integrantes.find(integrante => integrante.id === integranteId);
    
    if (integrante) {
        res.json(integrante);
    } else {
        res.status(404).send({ error: "Integrante no encontrado" });
    }
});

// Ruta GET para presentar un HTML con algunos productos
app.get('/products', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Productos</title>
            </head>
            <body>
                <h1>Lista de Productos</h1>
                <ul>
                    <li>Producto 1: Laptop - $800</li>
                    <li>Producto 2: Teléfono - $600</li>
                    <li>Producto 3: Audífonos - $100</li>
                    <li>Producto 4: Smartwatch - $150</li>
                </ul>
            </body>
        </html>
    `);
});

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});