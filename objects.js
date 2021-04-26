var userOne = {
    email: 'userOne@gmail.com',
    name: 'Sergino',
    login(){
        console.log(this.name, 'has logged in');
    },
    logout(){
        console.log(this.name, 'has logged out');
    }
};
