import { CarBuilder } from './CarBuilder';

export class Car {
	private readonly engine: string;
	private readonly color: string;
	private readonly wheels: string;
	private readonly soundSystem: string;
	private readonly interior: string;
	private readonly sunroof: boolean;
	private readonly gpsNavigation: boolean;

	constructor(builder: CarBuilder) {
		this.engine = builder.getEngine();
		this.color = builder.getColor();
		this.wheels = builder.getWheels();
		this.soundSystem = builder.getSoundSystem();
		this.interior = builder.getInterior();
		this.sunroof = builder.getSunroof();
		this.gpsNavigation = builder.getGpsNavigation();
	}

	toString(): string {
		return `Car Specifications:
	 - Engine: ${this.engine}
	 - Color: ${this.color}
	 - Wheels: ${this.wheels}
	 - Sound System: ${this.soundSystem}
	 - Interior: ${this.interior}
	 - Sunroof: ${this.sunroof ? 'Yes' : 'No'}
	 - GPS Navigation: ${this.gpsNavigation ? 'Yes' : 'No'}`;
	}
}