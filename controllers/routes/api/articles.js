const router = require("express").Router();
const articlesController = require("../../articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.search)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router.route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

router.route("/saved")
  .get(articlesController.findAll);

module.exports = router;