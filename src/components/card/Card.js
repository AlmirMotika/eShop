import React from 'react'
import styles from "./card.module.scss";
const Card = ({children,cardclass}) => {
  return (
    <div className={`${styles.card} ${styles.cardclass}`}>
        {children}
      
    </div>
  )
}

export default Card
