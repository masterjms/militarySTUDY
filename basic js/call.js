// call()은 이미 할당되어있는 다른 객체의 함수, 메소드를 호출하는 해당 객체에 재할당할때 사용된다.
// this는 현재 객체를 참조한다. 메소드를 한번 작성하면 재작성 필요없이 call()을 이용해 다른 객체에 상속가능.

function Product(name, price) {
    this.name = name;
    this.price = price;
  
    if (price < 0) {
      throw RangeError('Cannot create product ' +
                        this.name + ' with a negative price');
    }
  }
  
  function Food(name, price) {
    Product.call(this, name, price); //이미 만들어진 함수를 call을 통해 불러오고, this로 재할당한다.
    this.category = 'food';
  }
  
  function Toy(name, price) {
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  var cheese = new Food('feta', 5);
  var fun = new Toy('robot', 40);

  //익명 함수 호출
  var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
      this.print = function() {
        console.log('#' + i + ' ' + this.species
                    + ': ' + this.name);
      }
      this.print();
    }).call(animals[i], i);
  }
