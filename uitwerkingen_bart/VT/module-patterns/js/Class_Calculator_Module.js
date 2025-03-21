// Class versie
// Wel samenhang door de class
// Interne total property beschermd
class Class_Calculator_Module {
    #total = 0;

    add(a, b) {
        this.#total += a + b;
        return a + b;
    }

    sum(a, b) {
        return this.#total + a + b;
    }
}

export { Class_Calculator_Module };