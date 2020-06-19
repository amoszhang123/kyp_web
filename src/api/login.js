import {axios} from '@/api/index';

export const query = params => {
    return axios.get("login", {params: params})
};

export const getWoods = params => {
    return axios.get("woods", {params: params})
};

export const buy = params => {
    return axios.post("order", params).then(res => res)
};

export const getUsers = params => {
    return axios.get("accounts", {params: params})
};
