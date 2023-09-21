const app = require("./app");
require("dotenv").config({path: "../.env"});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));