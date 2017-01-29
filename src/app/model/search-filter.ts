export class SearchFilter {
     textFilter:string ='';
     userOnly:string = '';
     messageOnly:string ='';
    constructor(values: Object = {}) {
    Object.assign(this, values);}
}
