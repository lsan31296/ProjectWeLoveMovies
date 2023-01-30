const knex = require("../db/connection");//knex instance

function list() {
    return knex("theaters as t")
        .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
        .select("t.*", "mt.movie_id")
        .where({ "mt.is_showing": true })
}

module.exports = {
    list,
}