import Arena from "./arena.js"
import Gladiator from "./gladiator.js"
const max = new Gladiator("Maximus","Trident");
const titus = new Gladiator("Titus","Spear");
const colosseum = new Arena("Colosseum");

colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();  