function titleize(array, callback) {
  let titleized = array.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
};
titleize(["Mary", "Brian", "Leo"], (array) => {
  array.forEach(name => console.log(name));
})

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function() {
  this.height = this.height + 12;
}

Elephant.prototype.addTrick(trick) = function() {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  console.log(`${this.name} is ${this.tricks[trickIndex]}`);
}

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is trotting by!`);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
