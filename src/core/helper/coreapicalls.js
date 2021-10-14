import { authenticate, isAuthenticated } from '../../auth/helper';
import {API} from '../../backend';

export const getProducts =() => {
    if(isAuthenticated()){
    return fetch(`${API}`, {method:'GET', headers:{'Authorization' : `Bearer ${isAuthenticated()}`}})
    .then(response => {
        console.log(response.ip)
        
        return response.json();
    })
    .catch(err => console.log(err, "coreapicalls error"))
    }else{
        return false
}
}