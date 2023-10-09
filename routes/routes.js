const questionRoutes = require("./question");

const appRouter = (app, fs) => {
  questionRoutes(app, fs);
};

module.exports = appRouter;
