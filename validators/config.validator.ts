export class CustomValidation{
    static  textLength={min:2, max:80}
    static intNumberRange={min:1, max:5000}
}

export class ErrorMsg{
    static required(entity:string, field:string) {
        return `${field} ${entity} is required`
    }
}
