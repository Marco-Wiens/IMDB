import { Movie } from "./Movie";
import { Imdb } from "./Imdb";
import * as fs from 'fs';

let movie1:Movie = new Movie("Aventuras de Pedrito", 2023, "España", "Ciencia Ficcion");
let movie2:Movie = new Movie("Romance Down", 2023, "Francia", "Romántica");
let movie3:Movie = new Movie("Vengadores", 2012, "USA", "Acción");

let arr:Movie[] = [movie1, movie2, movie3];
let imdb:Imdb = new Imdb(arr);

let js = JSON.stringify(imdb);

console.log(js);

fs.writeFileSync("imdbBBDD.json", js);

let arrMov = fs.readFileSync("imdbBBDD.json");

let imdb2: Imdb = new Imdb(JSON.parse(arrMov.toString()).peliculas);

// console.log(imdb2);



