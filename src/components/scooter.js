class Scooter {
    static scooters = [];
    
    constructor() {
        this.scooterId = "SCOO" + Math.random().toString().slice(2,13);
        this.location = undefined;
        this.chargePercent = 0;
        this.isBroken = false;
        this.isCharging = false;
        this.isAvailable = this.chargePercent == 100 && this.isBroken == false ? true : false;
        this.distanceTravelled = 0;
    }
    // Methods
    scooterCharging() {

    }

    batteryRunDown() {

    }
}

module.exports = Scooter;