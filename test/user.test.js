import User from "../src/User";

test("deve criar um usuário", () => {
    let user = new User();

    expect(user).toBeInstanceOf(User);
});

test("deve criar um usuário com nome, data de nascimento e e-mail", () => {
    let user = new User("Leo", "30/08/1990", "leo.romanzoti@gmail.com");

    expect(user.name).toBe("Leo");
    expect(user.birthDate).toBe("30/08/1990");
    expect(user.email).toBe("leo.romanzoti@gmail.com");
});

test("deve ter uma senha de no mínimo 6 digitos", () => {
    let user = new User(
        "Leo",
        "30/08/1990",
        "leo.romanzoti@gmail.com",
        "300890"
    );

    let passwordIsValid = user.passwordValidator();

    expect(passwordIsValid).toBe(true);
});

test("deve ter uma senha não valida", () => {
    let user = new User(
        "Leo",
        "30/08/1990",
        "leo.romanzoti@gmail.com",
        "30089"
    );
    let passwordIsValid = user.passwordValidator();

    expect(passwordIsValid).toBe(false);
});

test("deve ter mais de 11 anos", () => {
    let user = new User(
        "Leo",
        "1990-08-30T00:00:00.000",
        "leo.romanzoti@gmail.com",
        "300890"
    );

    let birthDateIsValid = user.birthDateValidator();

    expect(birthDateIsValid).toBe(true);
});

test("deve ter uma data de nascimento inválida", () => {
    let user = new User(
        "Leo",
        "2013-08-30T00:00:00.000",
        "leo.romanzoti@gmail.com",
        "300890"
    );

    let birthDateIsValid = user.birthDateValidator();

    expect(birthDateIsValid).toBe(false);
});
