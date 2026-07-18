

export class Api {

    constructor(request) {
        this.request = request;
    }

    async registerUser(username, password) {
        await this.request.post('/register', {
            data: {
                username: username,
                password: password,
                confirmPassword: password
            }
        })
    }
}
