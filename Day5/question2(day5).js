console.log("Classes of user,moderator and admin with certain features.");
class User{
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.lucoins =0;
        this.course=[];
    }
    login(){
        console.log(`${this.name} has logged in`);
    }
    logout(){
        console.log(`${this.name} has logged out`);
    }
}


class Moderator extends User{
    constructor(name,age,email,){
        super(name,age,email);
        this.lucoins=0;
    }
    addCoins(user){
        this.user = user;
        this.lucoins ++ ;
        console.log(`${this.name} has ${this.lucoins}coins`)

    }
    removeCoins(user,){
        this.user = user;
        this.lucoins -- ;
        console.log(`${this.name} has ${this.lucoins}coins`)
    }
}

 
class Admin extends User {
 constructor(name,age,email){
        super(name.age,email);
    }
    addcourse(user,course){
        user.course.push(course);
        console.log(user)
    }
}
let user1 = new User('Anna',22,'an@gmail.com')
let user2 = new User('DAVID',23,'DV@gmail.com')
let user3 = new User('Verain',24,'vr@gmail.com')
let mod = new Moderator('Berlin',22,'b@gmail.com')
let admin = new Admin('rio',25,'r@gmail.cpm')
user1.login()
user2.login()
mod.addCoins(user1);
mod.addCoins(user1);
mod.addCoins(user2);
mod.removeCoins(user1);
let users =[user1,user2,user3,mod,admin];
users.forEach(element =>{
    console.log(element);
})
admin.addcourse(user1,'python');
admin.addcourse(user1,'javascript')
admin.addcourse(user1,'javascript')
admin.addcourse(user2,'java')
admin.addcourse(user3,'javascript')
admin.addcourse(mod,'javascript')
