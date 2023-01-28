const moviesService = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const is_showing = req.query.is_showing;
    //console.log(is_showing);
    const data = is_showing === "true" ? await moviesService.listShowingMovies() : await moviesService.list();
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
};