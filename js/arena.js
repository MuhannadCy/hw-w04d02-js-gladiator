export default class Arena{
    constructor(name){
        
        this.name = name.charAt(0).toUpperCase() + name.slice(1)
        this.gladiators = []
    }
    addGladiator(gladiator){
        if(this.gladiators.length ==2){
            return console.log('Max Number of Gladiators in Arena ')
        }
        else this.gladiators.push(gladiator)
    }
    fight(){
        if(this.gladiators.length == 2){
            let fighter1 = this.gladiators[0].weapon
            let fighter2 = this.gladiators[1].weapon
            if(fighter1 == fighter2) return console.log("Both eliminated")
            else {
                if(fighter1 == 'Spear' && fighter2 == "Club") return console.log(this.gladiators[0].name + "is Victroious")
                else if(fighter1 == 'Club' && fighter2 == "Trident") return console.log(this.gladiators[0].name + "is Victroious")
                else if(fighter1 == 'Trident' && fighter2 == "Spear") return console.log(this.gladiators[0].name + "is Victroious")
                else return console.log(this.gladiators[1].name + "is Victroious")

            }
        }
    }
}