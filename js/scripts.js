function Phone(brand, price, color, year) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.year = year;
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + " and the year production is "+ this.year +".");
};

var iPhone6S = new Phone("Apple", 2250, "silver", 2017);
    Nokia3310 = new Phone("Nokia",100, "blue", 2000);
    SamsungGalaxyS10 = new Phone("Samsung", 5000, "white", 2020);

iPhone6S.printInfo();
Nokia3310.printInfo();
SamsungGalaxyS10.printInfo();
