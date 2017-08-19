var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = (function () {
    function Vehicle(wheel, fuel, color) {
        if (color === void 0) { color = 'white'; }
        this.color = color;
        this.fuel = fuel;
        this.wheel = wheel;
    }
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this, 4, 'gas', 'red') || this;
    }
    return Car;
}(Vehicle));
var Motorcycle = (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(deluxe) {
        var _this = _super.call(this, 2, 'gasoline') || this;
        _this.deluxe = deluxe;
        return _this;
    }
    Motorcycle.prototype.setFuel = function (fuel) {
        this.fuel = fuel;
    };
    Motorcycle.prototype.getFuel = function () {
        return this.fuel;
    };
    return Motorcycle;
}(Vehicle));
var car = new Car();
var motorcycle = new Motorcycle(false);
console.log(car);
console.log(motorcycle);
