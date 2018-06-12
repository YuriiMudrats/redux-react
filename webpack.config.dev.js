import path from "path";
export default {
  entry: path.join(__dirname, "/client/index.js"),
  output: {
    path: "/",
    filename: "bundle.js",
    // path: path.join(__dirname, 'dist'),
    publicPath: "/static/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, "client"),
          path.join(__dirname, "server/shared")
        ],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["env", "react"] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".css"]
  }
};
