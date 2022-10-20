import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification, selectAllNotifications } from "../../features/notification/notificationSlice";
import style from './Notification.module.scss';

const Notification = (props) => {
    const notification = useSelector(selectAllNotifications)
    const dispatch = useDispatch();

    return (
        <div>
            <div className={style.notification_wrapper}>
                {notification.map(note => {
                    return <NotificationItem dispatch={dispatch} id={note.id} key={note.id} type={note.type} message={note.message} />
                })}
            </div>
            {props.children}
        </div>
    )
}

export default Notification


const NotificationItem = (props) => {
    const [exit, setExit] = useState(() => false);
    const [width, setWidth] = useState(() => 0);
    const [intervalId, setIntervalId] = useState(() => null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 0.5
                }

                clearInterval(id)
                return prev
            })
        }, 20)
        setIntervalId(id)
    }


    const handlePauseTimer = () => {
        clearInterval(intervalId)
    }

    const handleCloseNotification = () => {
        handlePauseTimer();
        setExit(true)
        setTimeout(() => {
            props.dispatch(removeNotification(props.id))
        }, 400)
    }

    useEffect(() => {
        if (width === 100) {
            // Close Notification
            handleCloseNotification()
        }
    }, [width])

    useEffect(() => {
        handleStartTimer()
    }, [])

    return (
        <div
            onClick={() => setExit(() => true)}
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={
                `${style.notification_item} 
            ${props.type === true ? style.success : style.error}
            ${exit ? style.exit : ""}`}>
            <p>{props.message}</p>
            <div className={style.bar} style={{ width: `${width}%` }}></div>
        </div>
    )
}
