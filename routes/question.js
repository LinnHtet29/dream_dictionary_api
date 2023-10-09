const questionRoutes = (app, fs) => {
  const filePath = "./data/DreamDictionary.json";

  app.get("/", (req, res) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};

module.exports = questionRoutes;
