class Parent {
    constructor() {
        this.faterName = "schwerznegger";
    }
}
class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.faterName;
    }
}

const baby = new Child('androld');
console.log(baby.getFullName("k"));