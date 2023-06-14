
export const  updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map( u => {                        //вернет новый массив, в к-ром заменит, если найдет совпадения по такому objPropName из объекта с таким itemId, создаст копию объекта измененного и заменит старые свойства деструктуризация вот этих новых свойств нового объекта
        if (u[objPropName] === itemId) {
            return {...u, newObjProps}
        }
        return u;
    })
}