import { concat } from 'rxjs';

class MovieGenre {
    id: number;
    name: string;
    active: boolean;
}

export class MovieQuery {
    
//Integer[] cast, String rated, String dateReleasedBefore, String dateReleasedAfter, Integer page, String sort )
    page: number;
    movieGenre: MovieGenre[];
    cast: number[];
    rated: string;
    dateReleasedBefore: string;
    dateReleasedAfter: string;
    sort: string;

    public static movieGenreArray = [
        { id:28,name:'Action'}, {id:12,name:'Adventure'},{id:16,name:'Animation'}, {id:35,name:'Comedy'}, {id:80,name:'Crime'},
        {id:99,name:'Documentary'}, {id:18,name:'Drama'}, {id:10751,name:'Family'}, {id:14,name:'Fantasy'}, {id:36,name:'History'},
        {id:27,name:'Horror'}, {id:10402,name:'Music'}, {id:9648,name:'Mystery'}, {id:10749,name:'Romance'}, {id:878,name:'Science Fiction'},
        {id:10770,name:'TV Movie'}, {id:53,name:'Thriller'}, {id:10752,name:'War'}, {id:37,name:'Western'}
    ]

    public static movieRatingsArray:string[] = [ "G", "PG", "PG13", "R", "NC-17"];

    public static genreIdArray:number[] =[28, 12, 16, 35, 80, 
        99, 18,10751, 14, 36, 
        27, 10402, 9648, 10749, 878,
         10770, 53,  10752, 37];
    public static genreNameArray:string[] = ['Action','Adventure','Animation','Comedy','Crime',
    'Documentary','Drama','Family','Fantasy','History',
    'Horror','Music','Mystery','Romance','Science Fiction',
    'TV Movie','Thriller','War','Western'];

    constructor(){
        this.page = 1;
    }


    queryToString(): string{
        console.log("Building QueryString");
        let myString = `?page=${this.page}`;
        if(this.movieGenre){
            if(this.movieGenre.filter(genre => genre.active == true).length){
             //console.log( this.movieGenre.filter(genre => genre.active == true).map(activeGenre => activeGenre.id) );
             myString += `&genres=${this.movieGenre.filter(genre => genre.active == true).map(activeGenre => activeGenre.id)}`;
             //concat(myString,`&genre=${this.movieGenre.filter(genre => genre.active == true).map(activeGenre => activeGenre.id)}`);
            }
        }
        if(this.cast){
            if(this.cast.length){
                console.log(`&cast=${this.cast}`);
                myString += `&cast=${this.cast}`;
            }
        }
        if(this.rated){
            myString += `&rated=${this.rated}`;
        }
        if(this.dateReleasedBefore){
                myString += `&dateReleasedBefore=${this.dateReleasedBefore}`;       
        }
        if(this.dateReleasedAfter){
            myString += `&dateReleasedAfter=${this.dateReleasedAfter}`;       
        }

        if(this.sort){
            concat(myString,`&sort=${this.sort}`);
        }
        console.log(myString);
        return myString;
    }

}