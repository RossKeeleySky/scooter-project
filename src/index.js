const prompt = require("prompt");
const User = require("./components/user");
const App = require("./components/app");
const Scooter = require("./components/scooter");
const ChargingStation = require("./components/chargingStation");

class Server {
    constructor() {
        this.users = [];
        this.chargingStations = [];
        this.scooters = []
    }

    addChargingStation(chargingStation) {
        this.chargingStations.push(chargingStation);
    }
}




const Server1 = new Server;

const ScooterHireApp = new App("Scooter Hire App");

const WhitechapelStation = new ChargingStation("Whitechapel", 3);

const Scooter1 = new Scooter;
const Scooter2 = new Scooter;

const Jim = new User("Jim", 20020525);
const Ann = new User("Ann", 19950110);
const Bastien = new User("Bastien", 19960211);
const Carla = new User("Carla", 19970312);
const Dorian = new User("Dorian", 19980413);
const Eoin = new User("Eoin", 19990514);
const OldJim = new User("Old Jim", 20000615);

Server1.addChargingStation(WhitechapelStation);

WhitechapelStation.addScooter(Scooter1);
WhitechapelStation.addScooter(Scooter2);

console.log(WhitechapelStation.chargeScooter(Scooter1));

ScooterHireApp.createNewUser(Server1, Jim);
ScooterHireApp.createNewUser(Server1, OldJim);
ScooterHireApp.createNewUser(Server1, Ann);
ScooterHireApp.createNewUser(Server1, Bastien);
ScooterHireApp.createNewUser(Server1, Carla);
ScooterHireApp.createNewUser(Server1, Dorian);
ScooterHireApp.createNewUser(Server1, Eoin);



// console.log(Server1);
// console.log(WhitechapelStation.chargingPortsAvailable);
// console.log(WhitechapelStation.chargingPortsNum - WhitechapelStation.scooters.length);

console.log(WhitechapelStation);
ScooterHireApp.hireScooter(OldJim, WhitechapelStation);
console.log(WhitechapelStation);
console.log(OldJim);
ScooterHireApp.hireScooter(OldJim, WhitechapelStation);
console.log(OldJim);
console.log(WhitechapelStation);
console.log("Scooters List: ", WhitechapelStation.scooters);
console.log("Scooters List Length: ", WhitechapelStation.scooters.length)
console.log("Charging Ports Num: ", WhitechapelStation.chargingPortsNum);
console.log("charging Ports Available: ", WhitechapelStation.chargingPortsAvailable);
