class UserDataGenerator{
    generateUserName(){
        return `username${Math.random().toString().slice(2, 8)}`;
    }

    generateEmail(username){
        return `${username}@testmail.com`;
    }

    generatePassword(username){
        return `${Math.random().toString().slice(2, 4)}test`;
    }
}

const dataGenerator = new UserDataGenerator();
export default dataGenerator;