export class User {
    public firstName;
    public age;
    public lastName;
    public completeName;

    constructor(user) {
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
        this.completeName = this.firstName + ' ' + this.lastName;
    }
}