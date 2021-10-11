function Dog(breed, color, age, goodBoy=true) {
    this.breed = breed,
    this.color = color,
    this.age = age,
    this.goodBoy = goodBoy
}

Dog.prototype.about = function() {
    return `${this.breed}, ${this.color}, ${this.age} years old, ${this.goodBoy ? "Is" : "Not"} a good boy`
}

Jonny = new Dog("lab", "black", 4, true);
console.log(Jonny.about())