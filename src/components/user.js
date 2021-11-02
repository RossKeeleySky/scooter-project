class User {
    static users = [];
    
    constructor(name, dobyyyymmdd) {
        this.name = name;
        this.dobyyyymmdd = dobyyyymmdd.toString();
        this.userId = undefined;
        this.isLoggedIn = false;
        this.hasHired = false;
        this.scooterHired = [];
    }
    // Methods
}

module.exports = User;
