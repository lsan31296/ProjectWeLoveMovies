const theatersService = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    const { movieId } = req.params;
    const theaters = await theatersService.listForMovies();
    const data = theaters.filter(movieId ? theater => theater.movie_id === Number(movieId) : () => true);
    res.json({ data });
}

module.exports = {
    list: asyncErrorBoundary(list),
}
