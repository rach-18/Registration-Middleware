export function validCredentials(req, res, next) {
    const {firstName, lastName, password, email, phone} = req.body;

    if(!/^[A-Z][a-z]+$/.test(firstName) || !/^[A-Z][a-z]+$/.test(lastName)) {
        return next(
            new Error("First name and Last name must start with a capital letter and must only containe letters!")
        );
    }

    if(!/^(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
        return next(
            new Error("Password must contain at least one uppercase, one lowercase, one special character, one number and must be 8 characters long!")
        );
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return next(
            new Error("Invalid email address!")
        );
    }

    if(typeof phone !== "string" || phone.length < 10 || phone.length > 10) {
        return next(
            new Error("Invalid Phone Number!")
        );
    }

    next();
}

export function errorHandle(error, req, res, next) {
    res.status(400).json({error: error.message});
}
