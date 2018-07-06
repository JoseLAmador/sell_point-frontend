import axios from 'axios';

let debug = false;

//Localhost urls

let tokenUrl = 'http://localhost:8000/api/auth/token-auth/';
let userUrl = 'http://localhost:8000/api/auth/me/';
let allUsersUrl = 'http://localhost:8000/api/auth/users/';
let profilesUrl = 'http://localhost:8000/api/auth/profiles/';






//heroku urls
if(debug){


}





const api = {


    /*-----------------user functions-----------------------*/
    logIn:(data)=>{
        console.log("DD", data)
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







};

export default api;

