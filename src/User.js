export default class User {
    constructor(name, birthDate, email, password) {
        this.name = name;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
    }

    passwordValidator() {
        if (this.password.length >= 6) {
            return true;
        }
        return false;
    }

    birthDateValidator() {
        const birthYear = new Date(this.birthDate).getFullYear();
        const yearNow = new Date().getFullYear();
        const lessThan11 = yearNow - birthYear;

        if (lessThan11 < 11) {
            return false;
        }
        return true;
    }
}
