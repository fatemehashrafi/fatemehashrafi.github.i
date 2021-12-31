import debug from "debug";
const generallog:debug.Debugger=debug("app:general");

class hero{
    name:string
    _health:number
    xp:number
    hunger:number
    log :debug .Debugger
    constructor() {
        this.name = "";
        this._health = 100;
        this.xp = 2;
        this.hunger = 6;
        this.log=debug(`man mordam ${this.hunger}`);     
    }
    set health(input) {
        this._health = input
    }
    get health() {
        return this.health;
    }
    attack() {
        this.hunger--;
        this.log("attacking");
    }
    amIDead() {
        return this._health <= 0 || this.hunger <= 0;
    }
}

// class archer extends hero {
//     attack() {
//         this.log("archer attacking");
//     }

// }
// class knight extends hero {
//     sword:number
//     constructor(name, sword) {
//         super(name);
//         this.sword = 6;
//     }
// }
// class soldier extends hero{
//     name:string
//     knight:string
//     constructor(name,knight){
//         this.name=name;
//         this.knight=knight;
//     }
// }

// class clan{
//     name : string = "";
//     army : hero[]=[]
//     constructor( name: string ,army : hero[]){
//         this.army=army;
//         this.name=name;
//     }
//    attack(enemy:number){
//        console.log("i am attacking")
//        soldier1.attack(enemy.army[Math.floor(Math.random() * this.army.length)]);
//        enemy.forEach(hero => {
//            hero.attack()
//        });
//    }
// }

// const clan =new clan()
// clan1.army.push(new soldier ,new knight)
// const knight1=new knight();
// const knight2=new knight();
// const knight3=new knight();
// const knight4=new knight();
// const soldier1=new soldier();
// const soldier2=new soldier();
// const soldier3=new soldier();
// const soldier4=new soldier();
// const soldier5=new soldier();
// const soldier6=new soldier();
// soldier1.attack(knight1 )



async function logtest() {
    let i:number=0
    for(i=0 ;i<10 ;i++){
        generallog(`index is ${i}`);
    }
}
logtest()