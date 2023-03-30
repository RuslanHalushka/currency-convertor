import {api} from "./api";
export const getCurrService ={
    getCurr: ()=> api.get('/NBUStatService/v1/statdirectory/exchange?json')
}