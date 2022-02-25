import styles from './Card.module.scss';
import React from 'react';


function Card({ onFavorite, onPlus, title, imageUrl, price }) {

    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus( {title, imageUrl, price} );
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return(
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img onClick={onClickFavorite}  src={isFavorite ? '../img/liked.svg' : "../img/unliked.svg"} alt="unliked" />
            </div>
            <img width={133} height={113} src={imageUrl} alt="sneakers"/>
            <h5>{title}</h5>
            <div className="d-flex justify-between mt-15 align-center">
                <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
                </div>
                <img className={styles.plus} onClick={onClickPlus}  src={isAdded ? "../img/ordered.svg" : "../img/plus.svg" } alt="plus" />
            </div>
        </div>
    );
}

export default Card;