export class Movie {

    id: number;
    title: string;
    urlThumbnail: string;
    stock: number;
    rentedOut: number;
    totalTimesRented: number;
    currentlyRentedbyMember: boolean;
    

    plot: string;
    rating: number;
    releaseDate: Date;
    backdrop: string;

    detailsActive: boolean;
    
    constructor(){
        this.currentlyRentedbyMember = false;
        this.detailsActive = false;
    }

}