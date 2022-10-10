import { useDispatch, useSelector } from "react-redux";
import { selectAllNotifications } from "../../features/notification/notificationSlice";
import style from './Notification.module.scss';
import NotificationItem from "./NotificationItem";

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