import axios from 'axios';

export default {
    getBarbers: function () {
        return axios.get("/api/routes");
    },
    signup: function (data){
        return axios.post("/api/signup", data)
    }
}