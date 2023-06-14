import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    // let stateWithSetState = useState(true)    //useState возвращает массив из двух элементов. в первом массиве - само значение State
    // debugger
    // let editMode = stateWithSetState [0] //и мы из этого массива достаем первое значение, то есть значение, которое непосредственно хранится в стейте (в данном случае со старта сидит фалс)
    // let setEditMode = stateWithSetState [1]     //вторым элементов будет сидеть ф-я, которое меняет это одиночное значение editMode

    // let stateWithSetState = useState(true)
    let [editMode, setEditMode] = useState(false) //useState возвращает массив из двух элементов. первому элементу editMode присваивается первое значение (0), а второму элементу setEditMode присваевается второе значение массива 1.
    let [status, setStatus] = useState(props.status)

    useEffect(() => {//useEffect - хук, к-й говорит, чтобы закинули в него ф-ю, которую он выполнит когда произойдет отрисовка. потом выполню
        setStatus(props.status)          //засинхрон-ть статус, к-1 хранится в   useState, с теми данными, которые пришли из пропсов
    }, [props.status])         //запускается только тогда, когда будет изменен props.status. мы от него зависим

    const activateEditMode = () => {
        setEditMode(true) //setEditMode функция, которая меняет значение editMode
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status) //отправляем новый статус на сервер
    }

    const onStatusChange = (e) => {        //onStatusChange при каждом напечатывании символа меняется локальный статус....e.currentTarget.value - значение для статуса
        setStatus(e.currentTarget.value)
    }

    return (

        <div>
            {!editMode &&   //если у нас не editMode, то показ эту дивку со статусом
                <div>
                        <span onDoubleClick={activateEditMode}>
                            {props.status ? props.status : 'type something please'}
                        </span>
                </div>}
            {editMode &&   //если у нас editMode, то показ эту дивку со строкой ввода
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                </div>}
        </div>
    )
}


export default ProfileStatusWithHooks