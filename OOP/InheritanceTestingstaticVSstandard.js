//Static methods belong to the class itself(the blueprint).
//Instance methods belong to the object you created with the *new* (bueprint instance)
//Instance methods cannot 'see' static methods via super.
//If you absolutely want an instance of a tree to access a static definition from the parent, you cannot use the super keyword. 
//You have to reference the Parent Class by its name directly. Eg. Tree.definition()

class Tree {
    constructor(species) {
        this.species = species
    }
    static definition () {
        return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
    }

}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species)
        this.name = name
    }
    definition() {
        // console.log(this)////////
        return `${super.definition()} Evergreens keep their leaves all year round.`
    }
    log () {
        console.log(this)
    }
}

class Child extends Evergreen {
    constructor(name, species, rooted){
        super(species, name ) //super is called once; once for the sub-parent,not twice.
        this.rooted = rooted
    }
    intro () {
        return `${this.name}, ${this.species}, ${this.rooted}`
    }

}

const tree = new Tree("Plantae")
const evergreen = new Evergreen("Plantae", "Biggy Treegy")
console.log(Evergreen.definition()) //definition is static, meaning it cannot be called on an instance but the class itself
console.log(evergreen.definition())
const child = new Child("Just Child", "PlantPy", true)
console.log(child.intro())
