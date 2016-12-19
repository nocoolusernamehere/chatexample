'use strict';

class User {
    constructor() {}

    addAddress(address) {
        this.address = address;
    }
    
    addStreet(street) {
        this.street = street;
       
    }
    
    toString() {
        return 'I am a user';    
    }
    
    clone() {
        return Object.assign(Object.create(this), this);
    }
}

class SuperUser extends User {
    constructor(){
        super();
    }
    
    addAddress(address){
        super.addAddress('this is a super address:' + address);
    }
    
    addStreet(street){
        super.addStreet(street);
        console.log('I am a super user');
    }
}

var user = new User;
user.addAddress('suh dude');
user.addStreet('Suh street');
var newUser = new SuperUser(user.clone());
newUser.addAddress('hey now');
newUser.addStreet('Hey now street');

console.log(newUser);

