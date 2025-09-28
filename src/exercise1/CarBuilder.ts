import { Car } from './Car';

export class CarBuilder {
    private engine: string;
    private color: string;
    private wheels: string;
    private soundSystem: string;
    private interior: string;
    private sunroof: boolean;
    private gpsNavigation: boolean;

    constructor() {
        this.engine = "Standard";
        this.color = "White";
        this.wheels = "Standard";
        this.soundSystem = "Basic";
        this.interior = "Fabric";
        this.sunroof = false;
        this.gpsNavigation = false;
    }

    setEngine(engine: string): CarBuilder {
        this.engine = engine;
        return this;
    }

    setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    setWheels(wheels: string): CarBuilder {
        this.wheels = wheels;
        return this;
    }

    setSoundSystem(soundSystem: string): CarBuilder {
        this.soundSystem = soundSystem;
        return this;
    }

    setInterior(interior: string): CarBuilder {
        this.interior = interior;
        return this;
    }

    setSunroof(sunroof: boolean): CarBuilder {
        this.sunroof = sunroof;
        return this;
    }

    setGpsNavigation(gpsNavigation: boolean): CarBuilder {
        this.gpsNavigation = gpsNavigation;
        return this;
    }

    getEngine(): string { return this.engine; }
    getColor(): string { return this.color; }
    getWheels(): string { return this.wheels; }
    getSoundSystem(): string { return this.soundSystem; }
    getInterior(): string { return this.interior; }
    getSunroof(): boolean { return this.sunroof; }
    getGpsNavigation(): boolean { return this.gpsNavigation; }

	build(): Car {
        return new Car(this);
    }
}