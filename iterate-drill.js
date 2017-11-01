let myObj = {
    foo: 'foo',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam'
};

for (let key in myObj){
    console.log(`${key}: ${myObj[key]}`);
}
