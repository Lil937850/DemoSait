
export const required = value => {
    if (value) return undefined; //когда пришел объект, то возвращаем по умолчанию
        return "Field is required" //обязательное поле
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return 'max length is ${maxLength} symbols'; //когда пришел объект, и длина этого объекта больше maxLength то возвращаем ошибку
    return undefined //в противном случае возвращаем по умолчанию
}


// export const maxLength30= value => {
//     if (value.length > 30) return "max length is 30 symbols"; //когда пришел объект, и длина этого объекта больше 30  то возвращаем ошибку
//     return undefined //в противном случае возвращаем по умолчанию

// }