const express = require("express");
const router = express.Router();

router.use("/majors", require("./majors/majors.route"));
router.use("/minors", require("./minors/minors.route"));
router.use("/courses", require("./courses/courses.route"));
router.use("/standings", require("./standing/standings.route"));

module.exports = router;
