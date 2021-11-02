class ChargingStation {
    static chargingStations = [];

    constructor(location, chargingPortsNum) {
        this.location = location;
        this.locationId = "LOCA" + Math.random().toString().slice(2,13);
        this.chargingPortsNum = chargingPortsNum;
        this.scooters = []; // Number of available/broken/charging scooters determined by filter
        this.chargingPortsAvailable = this.scooters.length == 0 ? chargingPortsNum : chargingPortsNum - this.scooters.length;
    }
    // Methods
    calculateChargingPortsAvailable(chargingPortsNum, scootersNum) {
        let totalPorts = chargingPortsNum;
        console.log(totalPorts, scootersNum, "WTF??");
        return totalPorts - scootersNum;
    }
    
    addScooter(scooter) {
        if (this.chargingPortsAvailable > 0) {
            this.scooters.push(scooter);
            // replace with async function
            // this.chargingPortsAvailable = this.chargingPortsNum - this.scooters.length;
            scooter.location = this.location;
            this.calculateChargingPortsAvailable(this.chargingPortsNum, this.scooters.length);
            // chargeScooter(scooter);
        } else {
            console.log("No available charging ports");
        } 
    }

    async chargeScooter(scooter) {
        // start incrementing scooter.chargPercent up to 100
        console.log("Starting charge");
        scooter.isCharging = true;

        await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
        scooter.chargePercent = 100;

        console.log("Charge complete");
    }

}

module.exports = ChargingStation;