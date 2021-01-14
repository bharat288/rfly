import axios from 'axios';

export default axios.create({
    baseURL : "http://192.168.0.22/reviewsonthefly/client/webapi.php",
    headers:{
        "Content-type":"application/json; charset=UTF-8",
        
    }
});