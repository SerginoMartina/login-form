function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.name, 'has logged in');
};

User.prototype.logout = function(){
    this.online = false;
    console.log(this.name, 'has logged out');
};

var userOne = new User('sergino.martina@gmail.com', 'sergino');
