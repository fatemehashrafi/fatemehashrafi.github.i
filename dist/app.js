"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const generallog = (0, debug_1.default)("app:general");
class hero {
    constructor() {
        this.name = "";
        this._health = 100;
        this.xp = 2;
        this.hunger = 6;
        this.log = (0, debug_1.default)(`man mordam ${this.hunger}`);
    }
    set health(input) {
        this._health = input;
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
function logtest() {
    return __awaiter(this, void 0, void 0, function* () {
        let i = 0;
        for (i = 0; i < 10; i++) {
            generallog(`index is ${i}`);
        }
    });
}
logtest();
