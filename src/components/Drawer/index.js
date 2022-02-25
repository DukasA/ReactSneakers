import styles from './Drawer.module.scss';
import React from 'react';

function Drawer({ onClose, onRemove, items = [] }) {
    return (
        <div className="overlay">
            <div className={styles.drawer}>
            <div className="d-flex justify-between">
                <h2 className="mb-30">Корзина</h2>
                <img onClick={onClose} width={35} height={35} className="removeBtn cu-p" src="../img/btn-remove.svg" alt="remove" />
            </div>

            {
                items.length > 0 ? ( 
                <div>
                    <div className={styles.items}>
                    {
                        items.map((obj) => (
                            <div className={styles.cardItem}>
                            <div style={{backgroundImage: `url(${obj.imageUrl})` }} className={styles.cardItemImg}>
                                
                            </div>
                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img onClick={() => onRemove(obj.id)} className={styles.removeBtn} src="../img/btn-remove.svg" alt="remove" />
                            </div>
                        ))
                    }
                    </div>
                    <div className={styles.cardTotalBlock}>
                        <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                        </ul>
                        <button className={styles.greenButton}>Оформить заказ</button>
                    </div>
                </div> ) : ( <div>Cart is Empty</div> )
            }

            
            </div>
        </div>
    );
}

export default Drawer;