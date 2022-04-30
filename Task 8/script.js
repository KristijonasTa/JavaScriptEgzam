/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.subtraction = function () {
        return this.num1 - this.num2;
    };;
    this.multiplication = function () {
        return this.num1 * this.num2;
    };;
    this.division = function () {
        return this.num1 / this.num2;
    };;

}

const newSum = new Calculator (2, 2)
    console.log(newSum.sum())

const newCalc = new Calculator (5, 2)
    console.log(newCalc.subtraction())
    console.log(newCalc.multiplication())
    console.log(newCalc.division())
