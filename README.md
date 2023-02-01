# Project WeLoveMovies (Server)

## Installation
1. Fork and clone this repository.
2. Run `npm install`

Use `npm start` to run the application. By default it should deploy on `http://localhost:5001`.

This app serves as a backend with routes described in the `docs/routes/` folder:
1. `/movies`
2. `/movies?is_showing=true`
3. `/movies/:movieId`
4. `/movies/:movieId/theaters`
5. `/movies/:movieId/reviews`
6. `/reviews/:reviewId`
7. `/theaters`

HTTP requests can also be made using an application like Postman. These requests include `GET`, `PUT`, and `DELETE`. See `*.router.js` files for more information on which routes accpet which requests. 