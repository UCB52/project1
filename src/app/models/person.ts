export class Person {
    id:number=0;
    name:string="";
    age:number=0;
    date:string="";
    heading:string="";
    country:string="";
    descriptions:string="";
    cardDescriptions:{"id":number,"tag":string,"explain":string}[]=[];
    contents:{"id":number,"contentHeader":string,"panelId":string,"imgUrl":string,"imgDesc":string,"contentMain":string[]}[]=[];
    mainPhoto:string="";
    photos:string[]=[];
    signature:string="";
    wikipedia:string="";
}
