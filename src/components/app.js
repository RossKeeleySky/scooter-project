class App {
    constructor(name) {
        this.name = name;
        this.scooters = [];
        this.chargingStations = [];
    }
    // Methods
    overEighteen(dob) {
        if (/^[0-9]{8}$/.test(dob)) {
            const year = dob.slice(0, 4), month = dob.slice(4, 6) - 1, day = dob.slice(6);
            let birthDate = new Date(year, month, day);
            birthDate.setFullYear(birthDate.getFullYear() + 18);
            return birthDate <= new Date() ? true : false;
        } else {
            console.log("User date of birth format invalid");
        }
    }

    createNewUser(server, user) {
        if (this.overEighteen(user.dobyyyymmdd)) {
            user.userId = "USER" + Math.random().toString().slice(2,13);
            server.users.push(user);
            console.log(`New user created successfully. Welcome ${user.name}!`);
        } else {
            console.log(`You must be over 18 years old to use this service. Grow up ${user.name}`);
        }
    }

    async showChargingStations() {
        
    }

    hireScooter(user, ChargingStation) {
        if (user.scooterHired.length == 0 && 
            ChargingStation.scooters.filter((scooter) => scooter.isAvailable == true)) {
            let scooterHire = ChargingStation.scooters.filter((scooter) => scooter.isAvailable == true)[0];
            ChargingStation.scooters.splice(ChargingStation.scooters.indexOf(scooterHire), 1);
            // ChargingStation.chargingPortsAvailable += 1;
            user.scooterHired.push(scooterHire);
        } else {
            console.log(`Only one scooter can be rented per account. Nice try ${user.name}`)
        }
    }
}

module.exports = App;
