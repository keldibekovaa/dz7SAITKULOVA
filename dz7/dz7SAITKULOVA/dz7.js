//заданпие1
class Worker {

    constructor(name,surname,rate,days) {

        this.name=name
        this.surname=surname
        this.rate=Number (rate)
        this.days=Number(days)
    }
    getSalary(){

        return console.log(this.rate*this.days)
    }

    getFullname (){
        return console.log (${this.name} ${this.surname})
    }

}
//задание 2
const Aigerim =new Worker('aigerim','Keldibekova','250','30')
Aigerim.getSalary()
Aigerim.getFullname()