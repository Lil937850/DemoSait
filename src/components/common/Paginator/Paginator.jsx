import React, {useState} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];    //сщхдаем массив
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize) // берем общее кол-во страниц pagesCount и делим ее на размер порции portionSize и получаем кол-во порций portionCount
    let [portionNumber, setPortionNumber] = useState(1) // будем хранить первую порцию и ф-ю setPortionNumber, к-я меняет portionNumber
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1) //показывай кнопку влево PREV, в том случае, если PortionNumber больше единицы .. И внутри этой кнопки вешаем онклик и говорим, setPortionNumber установи (setPortionNumber ПРИШЛА ИЗ ХУКА useState) номер порции = порция текущая portionNumber - 1
            }}> PREV </button>}

        {pages
            .filter (p => p >= leftPortionPageNumber && p <= rightPortionPageNumber) //отрисовать только те страницы p, к-у больше или = левой границы и меньше или = правой границы
            .map((p) => {
            return <span className={cn ({
            [styles.selectedPage]: currentPage === p
        }, styles.pageNumber)}
            key={p}
            onClick={(e) => {
            onPageChanged(p)
        }}>{p}</span>
        })}
        {portionCount > portionNumber &&     //кнопка вправо показ-ся, когда кол-во порций portionCount больше, чем кол-во текущей порции, к-ю мы показываем portionNumber
            <button onClick={() => {       //если стрелка вправо показ-ся, то при клике на эту стрелку мы устанавливаем номер порции на 1 больше, чем та, что есть portionNumber + 1
            setPortionNumber(portionNumber + 1)
        }}> NEXT </button>

        }

            </div>
        }


        export default Paginator;


{/*        <div>*/}
{/*            {u.followed*/}
{/*        ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {*/}
{/*            props.toggleFollowingProgress(true, u.id)*/}
{/*            usersAPI.unfollow(u.id)*/}
{/*            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {*/}
{/*                withCredentials: true,*/}
{/*                headers: {*/}
{/*                    "API-KEY":"2eaa3d4d-4cb9-4146-871a-19abe3a12269"*/}
{/*                }*/}
{/*            })*/}
{/*                .then(responce => {*/}
{/*                    if (responce.data.resultCode == 0) {*/}
{/*                        props.unfollow(u.id);*/}
{/*                    }*/}
{/*                    props.toggleFollowingProgress(false, u.id)*/}
{/*                });*/}

{/*}}> Unfollow </button>*/}
{/*: <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {*/}
{/*props.toggleFollowingProgress(true, u.id)*/}
{/*usersAPI.follow(u.id)*/}

{/*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {*/}
{/*    withCredentials: true,*/}
{/*    headers: {*/}
{/*        "API-KEY":"2eaa3d4d-4cb9-4146-871a-19abe3a12269"*/}
{/*    }*/}
{/*})*/}
{/*    .then(responce => {*/}
{/*        if (responce.data.resultCode == 0) {*/}
{/*            props.follow(u.id);*/}
{/*        }*/}
{/*        props.toggleFollowingProgress(false, u.id)*/}
{/*    });*/}
{/*        }}> Follow </button>}*/}
{/*</div>*/}