// what a really long comment got too bored that instead of working on the code, made a really long comment, i need go get a life
var tick = new this(persectick,buildinga,multi,boost);
var game = {
  "source": {
    "milk": 0,
    "money": 0,
    "buildings": {
      "cowfarm": {
        "amount": 0,
        "cost": 150,
      }
    }
  },
  "default": {
    "itemrefund": 25,
    "priceincrease": 175
  },
  "pboost": {
    "clickmulti": 1,
    "moneypermilk": 5,
    "perclick": 1,
    "tickboost": 1
  }
}

function mclick(multi,mpc) {
  let x = multi * mpc;
  game.source.milk += x;
}

function msell(multi,mpm) {
  if (game.source.milk <= 0) {
    console.error("No milk.");
  } else {
    let x = multi * mpm;
    game.source.money += x;
    game.source.milk -= mpm;
  }
}

function mbuy(amount,type,name) {
  let x = amount;
  if (type == "building") {
    if (name == "cowfarm") {
      if (game.source.money < game.source.buildings.cowfarm.cost) {
        console.error("Not enough money.");
      } else {
        game.source.buildings.cowfarm.amount += x;
        game.source.money -= x * game.source.buildings.cowfarm.cost;
        
      }
    }
  }
},
