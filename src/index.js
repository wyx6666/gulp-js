function Person(name){
    this.name=name;
}
Person.fn('getName',function(){
    return this.name;
});
var one = new Person('Saturn');

console.log(one.getName());
