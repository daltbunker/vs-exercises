// parameter: brick height width and depth, hole height and width
// return true or false
// brick can be any direction
// brick fits if less than or equal to
// can't put brick in a non-orthogonal angle


function doesBrickFit(a, b, c, w, h) {

    const brick = [a, b, c];
    const wMatches = [];
    const hMatches = [];

    for (let i = 0; i < brick.length; i ++) {
        if (brick[i] <= w) {
            wMatches.push(i);
        }
        if (brick[i] <= h) {
            hMatches.push(i)
        }
    }

    for (let i = 0; i < wMatches.length; i++) {
        for (let j = 0; j < hMatches.length; j++) {
            if (i != j) {
                return true;
            }
        }
    }

    return false;


    console.log(wMatches, hMatches)

}

// console.log(doesBrickFit(1,1,1, 1,1)) //, true)
// console.log(doesBrickFit(1,2,1, 1,1)) //, true)
// console.log(doesBrickFit(1,2,2, 1,1)) //, false)
// console.log(doesBrickFit(1,2,2, 1,2)) //, true)
// console.log(doesBrickFit(1,2,2, 2,1)) //, true)
// console.log(doesBrickFit(2,2,2, 1,2)) //, false)

function doesBric(a,b,c, w,h) {
	let s = (a,b) => a-b;
	let brick = [a,b,c].sort(s);
	let hole = [w,h].sort(s);
	return brick[0]<=hole[0] && brick[1]<=hole[1];
}

// console.log(doesBric(10,1,10, 5,2))


class Animals {
    constructor(type, color, age) {
        this.type = type,
        this.color = color,
        this.age = age
    }

    get aType() {
        return this.type
    }

    set aType(newType) {
        this.type = newType
    }
}


const zebra = new Animals("mamal", "black&white", "12")

class Mamal extends Animals {
    constructor(type, color, age, habitat) {
        super(type, color, age)
        this.habitat = habitat
    }

    get all() {
        return this.type + this.color + this.age + this.habitat
    }
}

const leopard = new Mamal("cat", "spotted", 15, "desert")

console.log(leopard.all)