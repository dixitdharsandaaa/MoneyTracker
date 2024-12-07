import moment from "moment"

export const YYYY_MM_DD = "YYYY-MM-DD"
export const YYYY_MM_DD_HH_MM_SS = "YYYY-MM-DD HH:MM:SS"
export const MONTH_DATE_DAY = "MMM DD  dddd"
export const DDDD = "dddd"

export const currentDate = moment().format(YYYY_MM_DD)
export const dbCurrentDate = moment()

export const currentMonthDateDay = moment().format(MONTH_DATE_DAY)

export const appFormateDate = (date:any)=>{
    if(date){
        return moment(date).format(YYYY_MM_DD)
    }else{
        return ""
    }
}

export const dbFormateDate = (date:any)=>{
    if(date){
        return moment(date).format(YYYY_MM_DD)
    }else{
        return ""
    }
}


export const numericRegex = /[^0-9.]/g
