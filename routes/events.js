const {Router}=require('express');
const router=Router();
const {getFilms,getFilmsByType,createFilm}=require('../controllers/events')

//CreateFilm
router.post('/',createFilm)
//Get films (Serie or Movie)
router.get('/',getFilms);
//Get films by filter=type
router.get('/:type',getFilmsByType);

module.exports=router;