import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />); //передали статус
        const instance = component.getInstance(); //getInstance дай мне экземпляр объекта, с к-м я взаимодействую
        expect(instance.state.status).toBe("it-kamasutra.com"); //пришедший статус д.б.it-kamasutra.com
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span") //нашли спан
        expect(span).not.toBeNull(); // спан не должно быть toBeNull
    });

    test("after creation <input> shouldnt be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        expect(()=>{
            let input = root.findByType("input") //выполни стрелочную ф-ю и попробуй найти
        }).toThrow();  //и ожидаем, что получится ошибка - toThrow
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.children[0]).toBe("it-kamasutra.com"); //нулевой чилдрен спана должен содержать it-kamasutra.com
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span") //нашли спан
        span.props.onDoubleClick()  //кликнули по нем, спан исчезает
        let input = root.findByType("input") //появился инпут
        expect(input.props.value).toBe("it-kamasutra.com"); //и в этом инпуте "it-kamasutra.com"
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()              //если этот компонент вызовет нашу колбек ф-ю, то мы можем узнать об этом. это спец ф-я, к-я умеет считать, сколько раз ее вызывали
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback} />);
        const instance = component.getInstance()
            instance.deactivateEditMode() //если вдруг мы перешли в deactivateEditMode то не забыли вызвать ф-ю
        expect(mockCallback.mock.calls.length).toBe(1); //свойство mock.calls проверяет, сколько раз мы его вызвали. он должен быть вызван 1 раз
    });
});