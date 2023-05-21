
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Punto de entrada de la aplicación
  output: {
    path: path.resolve(__dirname, "dist"), // Ruta de salida de los archivos generados
    filename: "bundle.js", // Nombre del archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Extensiones de archivo que serán procesadas
        exclude: /node_modules/, // Excluir la carpeta "node_modules" del procesamiento
        use: "babel-loader", // Utilizar Babel para transpilar los archivos
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Extensiones que serán resueltas automáticamente
  },
};
