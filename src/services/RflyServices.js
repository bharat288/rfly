import http from "../http-common";

const getdata = data=>{
    return http.post('/',data);
}

export default {getdata};