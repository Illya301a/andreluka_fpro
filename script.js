//Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        this.step--;
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        alert(this.step);
        return this
    }
};

//Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().down().showStep(); // 1

//Все що я зробив це повернення ladder через return, тепер все працює так як повинно