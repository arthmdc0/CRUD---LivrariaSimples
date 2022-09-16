import app from "./src/app.js";

const port = process.env.PORT || 3000;

//conecta a porta aberta
app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})