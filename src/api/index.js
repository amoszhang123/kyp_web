import _axios from 'axios';
// import store from '../store';
// // import _ from 'lodash';
//
 const instance = _axios.create({
     baseURL: `http://139.9.250.102:80`,
 //        method: 'get',
             withCredentials: false,
                 headers: {
                       'Content-Type': 'application/json'
                           }
                             })

                             export const axios = instance;
                             export default {
                               axios
                               };
