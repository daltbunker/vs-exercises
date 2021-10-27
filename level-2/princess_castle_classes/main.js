
class Player {
    constructor(name) {
        this.name = name;
        this.totalCoins = 0;
        this.status = "small";
        this.hasStar = false;
        this.gameActive = true;
        this.statusList = ["small", "big", "powered up"]

    }

    setName(namePicked){
        this.name = namePicked;
    }

    gotHit() {
        const nextStatus = this.statusList.indexOf(this.status) - 1;
        if (nextStatus === -1){
            this.status = "dead";
        } else if (this.hasStar) {
            this.status = this.statusList[this.statusList.length - 1]
        } else {
            this.status = this.statusList[nextStatus]
        }
        this.print();
    }

    gotPowerUp() {
        const nextStatus = this.statusList.indexOf(this.status) + 1;
        if (nextStatus === this.statusList.length){
            this.hasStar = true;
        } else if (this.hasStar) {
            this.status = this.statusList[this.statusList.length - 1]
        } else {
            this.status = this.statusList[nextStatus]
        }
        this.print();
    }

    addCoin() {
        this.totalCoins++;
        this.print();
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nCoins: ${this.totalCoins}\n${this.hasStar ? "You have a star": ""}\n`)
    }
}

const player1 = new Player("Mario");

const gamePlaying = setInterval(
    () => {
        const randomNum = Math.floor((Math.random() * 3));
        switch(randomNum){
            case 0:
                player1.gotHit();
                break;
            case 1:
                player1.gotPowerUp();
                break;
            case 2:
                player1.addCoin();
                break;
            default:
                break;
        }

        if (player1.status === "dead") {
            clearInterval(gamePlaying)
        }
    }
, 500)