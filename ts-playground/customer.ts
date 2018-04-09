export class Customer {

    constructor(private id: number) {
    }

    fooBar() {
        const self = this;
        function callback1() {
            return self.id * 10;
        }

        const callback2 = () => this.id * 2;

        console.log(callback1());
        console.log(callback2());
        
        const text1 = `Hallo Jena, 
das ist Kunde ${this.id}`

        console.log(text1);
    }

    myMethod(myArg: string | number) {
        let val
        if (typeof myArg === 'string') {
            val = parseInt(myArg, 10)
        } else {
            val = myArg
        }
        console.log(typeof(val));
    }
}
