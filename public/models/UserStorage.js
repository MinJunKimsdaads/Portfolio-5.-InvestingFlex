class UserStorage {
     static #users = {
        id: ['kmj'],
    password: ["1234"],
    name: ['aaa','bbb','ccc'],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        // console.log(newUsers);
        return newUsers;
    }
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(user).reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        console.log(users);
    }
}

module.exports = UserStorage;

 