import { CarBuilder } from "./CarBuilder";

const customCar = new CarBuilder()
    .setEngine("V8 Turbo")
    .setColor("Red")
    .setWheels("Sport 20\"")
    .setSoundSystem("Premium Bose")
    .setInterior("Leather")
    .setSunroof(true)
    .setGpsNavigation(true)
    .build();

console.log(customCar.toString());