import { SORT_ASC } from "./actionTypes";


const dataReducer = (store=init,{type,payload})=>{
    switch(type){
        case SORT_ASC:
            return payload.sort((a,b)=>{
                if (a.title > b.title){
                    return 1;
                }else if (a.title < b.title) {
                    return -1;
                }
                return 0;
        })
    }
}