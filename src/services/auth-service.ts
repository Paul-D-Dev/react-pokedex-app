export default class AuthService { 
    static isAuth : boolean = false;

    static login(username: string, password: string): Promise<boolean> {
        const iD = (username === 'pikachu' && password === 'pikachu');

        return new Promise(resolve => {
            setTimeout(() => {
                this.isAuth = iD;
                resolve(iD);
            }, 1000);
        })
    }
}