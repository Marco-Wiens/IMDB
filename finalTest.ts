import { Professional } from "./professional";
import { Imdb } from "./Imdb";
import * as fs from 'fs';
var readLineSync = require("readline-sync");


let nuevo = fs.readFileSync("imdbBBDD.json");
let imdb: Imdb = new Imdb(JSON.parse(nuevo.toString()).peliculas);


console.log("********Nuevo Profesional**********");
console.log("***********************************");


var nombre: string = readLineSync.question("Nombre: ");
var age: number = readLineSync.question("Edad: ");
var weight: number = readLineSync.question("Peso: ");
var height: number = readLineSync.question("Altura: ");
var isRetired: string = readLineSync.question("Esta retirado?(SI/NO): ");
while((isRetired != "NO") && (isRetired != "SI")){
    isRetired = readLineSync.question("Porfavor introduce SI o NO: ");
}
var nationality: string = readLineSync.question("Nacionalidad: ");
var oscarsNumber: number = readLineSync.question("Cuantos Oscars tiene?: ");
var profession: string = readLineSync.question("Cual es su profesion?: ");
console.log("***********************************");
var pelicula: string = readLineSync.question("Que pelicula quieres modificar? ");
while(imdb.peliculas.filter((value) => {return value.title == pelicula}).length == 0){
    
    pelicula = readLineSync.question("Esta pelicula no existe, introduce otra: ");
    
}
var retirado: boolean = (isRetired == "SI");


let prof:Professional= new Professional(nombre,age,weight,height,retirado,nationality,oscarsNumber,profession);

for(let movie of imdb.peliculas){
    for(let atr in movie){
        if(atr === "title" && movie[atr] === pelicula){
            if(profession === "actor"){
                if(!movie.actors){
                    movie.actors = [];
                }
                movie.actors.push(prof);
            }else if (profession === "director"){
                movie.director = prof;
            }else if (profession === "writer"){
                movie.writer = prof;
            } 
        }
    }
}

imdb.escribirEnFicheroJSON("imdbBBDD.json");




