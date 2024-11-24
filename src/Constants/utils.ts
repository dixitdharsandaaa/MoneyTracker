import moment from "moment"

export const YYYY_MM_DD = "YYYY-MM-DD"

export const currentDate = moment().format(YYYY_MM_DD)

export const appDisplayFormateDate = (date:any)=>{
    if(date){
        return moment(date).format(YYYY_MM_DD)
    }else{
        return ""
    }
}

export const dbFormateDate = (date:any)=>{
    if(date){
        return moment(date)
    }else{
        return ""
    }
}