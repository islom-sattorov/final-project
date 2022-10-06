import { useEffect, useState } from 'react';
import { removeNotification } from '../../features/notification/notificationSlice';
import style from './Notification.module.scss';

const NotificationItem = (props) => {
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

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
            onClick={() => setExit(true)}
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={
                `${style.notification_item} 
            ${props.type === true ? style.success : style.error}
            ${exit ? style.exit : ""}`}>
            <p>{props.message}</p>
            {/* <button onClick={() => setExit(true)}>Exit</button> */}
            <div className={style.bar} style={{ width: `${width}%` }}></div>
        </div>
    )
}

export default NotificationItem