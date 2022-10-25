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
//задание 2
    
}
class WorkerTwo {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}

workerTwo = new WorkerTwo('AIGERIM ', 'KELDIBEKOVA ', '250', '31');
console.log(workerTwo.getName());
console.log(workerTwo.getSurname());
console.log(workerTwo.getRate());
console.log(workerTwo.getDays());
console.log(workerTwo.getSalary());
