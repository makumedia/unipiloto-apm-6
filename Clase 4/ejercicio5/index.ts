interface Vehicle {
	wheel: number;
	fuel: string;
	color: string;

	getWheel(): number;
	getFuel(): string;
	getColor(): number;

	setWheel(nid:number): void;
	setFuel(name:string): void;
	setColor(age:string): void;
}

class Car implements Vehicle{
	wheel: number;
	fuel: string;
	color: string;

	constructor(){}

	getWheel(): number{
		return this.wheel;
	}
	getFuel(): string{
		return this.fuel;
	};
	getColor(): string{
		return this.color;
	};

	setWheel(wheel: number): void{
		this.wheel = wheel;
	}
	setFuel(fuel: string): void{
		this.fuel = fuel;
	}
	setColor(color:string): void{
		this.color = color;
	}
}

var car = new Car();

car.setWheel(4);
console.log(car.getWheel());