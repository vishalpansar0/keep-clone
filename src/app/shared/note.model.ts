export class Note {
    public id: number;
    public title: string = '';
    public text: string = '';
    public color: string = 'transparent';

    constructor(id:number,title:string,text:string,color:string){
        this.id = id;
        this.title = title;
        this.text = text;
        this.color = color;
    }

}