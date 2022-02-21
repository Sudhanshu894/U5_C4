import { IS_EXPLICIT, SORT_ASC, SORT_DATE_ASC, SORT_DATE_DEC, SORT_DEC, SORT_QUAL_ASC, SORT_QUAL_DEC } from "./actionTypes"

export const sort_asc = (payload)=>{
    {type: SORT_ASC, payload}
}

export const sort_dec = (payload)=>{
    {type: SORT_DEC, payload}
}

export const sort_date_asc = (payload)=>{
    {type: SORT_DATE_ASC, payload}
}

export const sort_date_dec = (payload)=>{
    {type: SORT_DATE_DEC,payload}
}

export const sort_qual_asc = (payload)=>{
    {type: SORT_QUAL_ASC, payload}
}

export const sort_qual_dec = (payload)=>{
    {type: SORT_QUAL_DEC, payload}
}

export const Is_explicit = (payload)=>{
    {type: IS_EXPLICIT,payload}
}