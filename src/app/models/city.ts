
export class City {
    id:number = 0;
    heading:string ="";
    description:string[] = [];
    name:string = "";        
    dateAdded:string="0000-00-00";
    mainPhoto:string="";
    publicId:string="";
    places:{id:string,placePhotos:string[],descriptions:string[],adress:string,website:string}[] = [];
}
