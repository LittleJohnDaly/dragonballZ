export default class DragonBall {
    // 1. Typage des propiétés d'un personnage dragon ball
    id: number;
    size: number;
    weight: number;
    name: string;
    picture: string;
    types: Array<string>;
    skills: Array<string>;
    created: Date;
     
    // 2. Définition des valeurs par défaut des propriétés d'un personnage dragon ball
    constructor(
     id: number,
     size: number = 1.70,
     weight: number = 73,
     name: string = 'name',
     picture: string = 'http://...',
     types: Array<string> = ['Saiyan'],
     skills: Array<string> = ['Kaméhaméha'],
     created: Date = new Date()
    ) {
     // 3. Initialisation des propiétés d'un personnage
     this.id = id;
     this.size = size;
     this.weight = weight;
     this.name = name;
     this.picture = picture;
     this.types = types;
     this.skills = skills;
     this.created = created;
    }
   }