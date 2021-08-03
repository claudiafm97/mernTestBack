const {response}=require('express');
const CinematographFilm=require('../models/CinematographFilm')


const createFilm=async(req,res=response)=>{
    const film=new CinematographFilm(req.body);

    try {
        
        const filmSave=await film.save();
        return res.status(200).json({
        ok:true,
        film:filmSave,
        msg:"OK"
    })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"No es posible crear el film"
        })
    }
    
}
const getFilms= async (req,res=response)=>{
  
try {
    const films=await CinematographFilm.find();
    res.status(200).json({
        ok:true,
        films,
        msg:'ok'
    })
} catch (error) {
    console.log(error);
    res.status(404).json({
        ok:false,
        msg:"Not found"
    })
}
}
const getFilmsByType =async (req,res=response)=>{
    try {
        let films=await CinematographFilm.find();
        let listFilter=[]
        films.map((film)=>{
            
            if(film.type===req.params.type){
        
                listFilter.push(film)
            }

        })
        
        if(listFilter.length>0){
            return res.status(200).json({
                ok:true,
                listFilter,
                msg:'ok'
            })
        }else{
            return res.status(404).json({
                ok:false,
                msg:"Not found"
            }) 
        }
       
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok:false,
            msg:"Not found"
        })
    }
    }
    module.exports={
        getFilms,
        getFilmsByType,
        createFilm
    }