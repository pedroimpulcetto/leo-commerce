export default class User {

    constructor(name, birthDate, email, password){
        this.name = name;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password; 
    }

    passwordValidator(){
        if (this.password.length >= 6) {
            return true;
        }
        return false;
    }

    birthDateValidator(){
        let birthYear = new Date(this.birthDate).getFullYear();
        let yearNow = new Date().getFullYear();
        let lessThan11 = yearNow - birthYear
        
        if (lessThan11 < 11){
            return false;
        }
        return true;
    }



}

