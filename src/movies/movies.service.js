//This service file will return proper data from database for movies resource
const knex = require("../db/connection");//knex instance

function list() {
    return knex("movies").select("movie_id", "title", "runtime_in_minutes", "rating", "description", "image_url");
}

module.exports = {
    list,
};