class User {
    constructor(name, age, userId) {
        this.name = name;
        this.age = age;
        this.userId = userId;
        this.isLoggedIn = false;
        this.hasHired = false;
    }
    // Methods
}
class HireApp {
    constructor(name, age, userId, isLoggedIn, hasHired) {

    }
    // Methods
}
class Scooter {
    constructor(scooterId) {
        this.scooterId = scooterId;
        this.location = undefined;
        this.isAvailable = true;
        this.isBroken = false;
        this.isCharging = false;
        this.chargePercent = undefined;
        this.distanceTravelled = 0;
    }
    // Methods
}
class ChargingStation {
    constructor(location, locationId, chargingPorts) {
        this.location = location;
        this.locationId = locationId;
        this.chargingPorts = chargingPorts;
        this.scootersAvailable = [];
        this.scooterBroken = [];
        this.scootersAvailableNum = this.scootersAvailable.length;
        this.chargingPortsAvailable = chargingPorts - (this.scootersAvailable.length + this.scootersBroken.length);
    }
    // Methods
}

class Server {
    constructor() {
        this.users = [];
        this.chargingStations = [];
        this.scooters = []
    }
}