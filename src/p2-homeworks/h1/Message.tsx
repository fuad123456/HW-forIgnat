import React from 'react'
import s from './Message.module.css'

type PropsType={
    avatar:string
    name:string
    message: string
    time:string
}

function Message(props:PropsType) {
    return (
        <div className={s.container}>
            <div ><img className={s.avatar} src={props.avatar} alt="" /></div>
            <div className={s.desc}>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
