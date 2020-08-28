
import axios from 'axios'
const baseUrl="https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5"

 class Service {
    static getApi(){
        return axios.get(baseUrl);   
    }
}

export default Service
