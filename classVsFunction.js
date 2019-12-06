function Hero(name, level) {
    this.name = name;
    this.level = level;
}

Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

function Mage(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;
}

Mage.prototype.greet = Hero.prototype.greet;

class HeroClass {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    greet() {
        return `${this.name} says hello.`;
    }
}

class MageClass extends HeroClass {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
    }
}

let player1 = new Mage('amos', 1, 'abrakadabra');
let player2 = new MageClass('rose', 2, 'shazam');
console.log(Object.getPrototypeOf(player1));
console.log(Object.getPrototypeOf(player2));
console.log(player2.greet(), player2.spell);
console.log(player1.greet(), player1.spell);