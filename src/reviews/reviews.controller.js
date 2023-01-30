const reviewsService = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
    const { movieId } = req.params;
    if (movieId) {
        const reviews = await reviewsService.listReviewsForMovie(movieId);
        for (let review of reviews) {
            const criticObj = await reviewsService.getCritic(review.critic_id);
            review["critic"] = criticObj.critic;
        }
        res.json({ data: reviews });
    } else {
        const data = await reviewsService.list();
        res.json({ data });
    }  
}//error: reviews.filter is not a function, something is not working correctly in the service and/or controller

module.exports = {
    list: asyncErrorBoundary(list),
}