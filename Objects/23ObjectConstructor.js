function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
//console.log("sally's species is " + sally.species + " and she is " + );
//console.log("holden's species is " + holden.species + " and he is " + );
console.log(sally.name+" species is " + sally.species + " and she is "+sally.age +" years old" );
console.log(holden.name+" species is " + sally.species + " and he is "+holden.age +" years old" )
