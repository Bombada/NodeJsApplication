class UserStorage {
    loginUser (id, password, onSuccess, onError){
        setTimeout (()=>{
            onSucess(id);

        },2000);
    }

    getRoles(user, onSuceess, onError){
        setTimeout(()=>{
            onSucess(id);
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter');
const password = prompt('enter password');
userStorage.loginUser(id, password, (user)=>{
    userStorage.getRoles(user,(userWithRole) =>)
}, (error)=>{console.log(error)});


function getId(id, password){
    loginUser(id, password, getRoles, ()=>{console.log('error')});
}