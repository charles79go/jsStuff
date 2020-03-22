const person = {
    name: 'amos',
    whoami: function() {
        console.log(this.name);
    }
};

const tao = () => {
    let name = 'chuck';
    let sinoAko = () => console.log(this.name);
    function whoami() {
        console.log(this);
    }
    return sinoAko;
};

person.whoami();
// tao.whoami = person.whoami;
// tao.whoami();

let x = tao();
x();
