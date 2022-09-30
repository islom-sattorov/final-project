import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../store/reducers/cards";
import styles from './Cards.module.css'
import EditIcon from '@mui/icons-material/Edit';
import EditModal from "./modal/Modal";

const Cards = () => {
    const dispatch = useDispatch();
    const cardsList = useSelector((state) => state.cards.cardsList);
    const loading = useSelector((state) => state.cards.loading);
    const [show, setShow] = useState(false);
    const [selectItem, setSelectItem] = useState(null);

   

    useEffect(() => {
        dispatch(getCards());
    }, [])


    return (
        <div>
            {loading ? 'Loading...' :
                <>
                    <div className={styles.cards_container}>
                        {cardsList.map((card, idx) =>
                            <div key={idx} className={styles.card}>
                                <div className={styles.avatar}>
                                    <img src={card.avatar} />
                                </div>
                                <div className={styles.fullname}>{card.first_name} {card.last_name}</div>
                                <IconButton color='primary' onClick={() => {setShow(true); setSelectItem(card)}}>
                                    <EditIcon />
                                </IconButton>
                            </div>
                        )}
                    </div>
                    <EditModal selectItem={selectItem} open={show} setOpen={setShow}/>
                </>
            }
        </div>
    )
}

export default Cards;