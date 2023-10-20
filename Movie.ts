import { Proffesional } from "./Proffesional";

export class Movie{

    public title:string;
    public releaseYear: number;
    public actors: Proffesional[];
    public nacionality: string;
    public director: Proffesional;
    public writer: Proffesional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title:string, releaseYear:number, nacionality:string, genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    public toString(): void{
        console.log(this);
    }

}