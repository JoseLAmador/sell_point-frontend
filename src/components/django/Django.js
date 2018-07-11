import axios from 'axios';

let debug = false;

//Localhost urls

let tokenUrl = 'http://localhost:8000/api/auth/token-auth/';
let userUrl = 'http://localhost:8000/api/auth/me/';
let allUsersUrl = 'http://localhost:8000/api/auth/users/';
let profilesUrl = 'http://localhost:8000/api/auth/profiles/';

//Clientes
let clientesUrl = 'http://localhost:8000/api/incomes/clientes/';

//Proveedores
let proveedoresUrl = 'http://localhost:8000/api/expenses/proveedores/';



//heroku urls
if(!debug){

    
    tokenUrl = 'https://sellpoint.herokuapp.com/api/auth/token-auth/';
    userUrl = 'https://sellpoint.herokuapp.com/api/auth/me/';
    allUsersUrl = 'https://sellpoint.herokuapp.com/api/auth/users/';
    profilesUrl = 'https://sellpoint.herokuapp.com/api/auth/profiles/';

    //Clientes
    clientesUrl = 'https://sellpoint.herokuapp.com/api/incomes/clientes/';

    //Proveedores
    proveedoresUrl = 'https://sellpoint.herokuapp.com/api/expenses/proveedores/';



}





const api = {


    /*-----------------user functions-----------------------*/
    logIn:(data)=>{
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: tokenUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Token ' + userToken
                }
            });
            instance.post('', data)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });


        });
    },
    getUser:()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: userUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.get('')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });


        });
    },



    /*-----------------Users functions-----------------------*/
    getAllUsers:()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject){
            const instance = axios.create({
                baseURL: allUsersUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.get('')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });
        })
    },
    newUser:(user)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject){
            const instance = axios.create({
                baseURL: allUsersUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.post('', user)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });
        })
    },
    editUser:(user)=>{
        if(user.password==='********')delete user.password
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject){
            const instance = axios.create({
                baseURL: allUsersUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.patch(user.id+'/', user)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });
        })
    },

    deleteUser:(user)=>{

        return new Promise(function (resolve, reject) {
            const userToken = JSON.parse(localStorage.getItem('userToken'));
            const instance = axios.create({
                baseURL: allUsersUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.delete(user+'/')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });


        });
    },
    saveProfile:(profile)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject){
            const instance = axios.create({
                baseURL: profilesUrl,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.post('', profile)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {

                    reject(error);
                });
        })
    },

    /*-----------------clients functions-----------------------*/

    getClientes:(url)=>{
        let newUrl = clientesUrl;
        if(url)newUrl=url;
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: newUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.get('')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

    newCliente:(cliente)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: clientesUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.post('', cliente)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

    deleteCliente:(clienteId)=>{

        return new Promise(function (resolve, reject) {
            const userToken = JSON.parse(localStorage.getItem('userToken'));
            const instance = axios.create({
                baseURL: clientesUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.delete(clienteId+'/')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },


    /*-----------------proveedores functions-----------------------*/

    getProveedores:(url)=>{
        let newUrl = proveedoresUrl;
        if(url)newUrl=url;
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: newUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.get('')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

    newProveedor:(proveedor)=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: proveedoresUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.post('', proveedor)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },

    deleteProveedor:(proveedorId)=>{

        return new Promise(function (resolve, reject) {
            const userToken = JSON.parse(localStorage.getItem('userToken'));
            const instance = axios.create({
                baseURL: proveedoresUrl,
                // timeout: 2000,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token ' + userToken
                }
            });
            instance.delete(proveedorId+'/')
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    console.log('el error: ', error.response);
                    reject(error);
                });


        });
    },







};

export default api;

