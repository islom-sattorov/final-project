import { useSelect } from "@mui/base"
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { REMOVEFAVORITES } from "../store/actions";
import styles from './Products.module.css';
const Products = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.user.favorites);

    return (
        <div>
            {favorites.length > 0 ?
                <div className={styles.cards_container}>
                    {favorites.map((user, idx) =>
                        <div className={styles.card} key={idx}>
                            <div>{user.name}</div>
                            <div>{user.surname}</div>
                            <div>{user.age}</div>
                            <Button onClick={() => dispatch({type: REMOVEFAVORITES, payload: user.name})}>REMOVE</Button>
                        </div>
                    )}
                </div>
                :
                null
            }
        </div>
    )
}

export default Products