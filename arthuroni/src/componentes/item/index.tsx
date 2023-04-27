import React from 'react'
import styles from './itens.module.scss';
import itens from '../itens/itens.json';
import  classNames  from 'classnames';

type Props = typeof itens[0]

export default function Item( {title, photo, id, price, description, category, serving, size} :Props) {

  return (
    <div> 
        <div className={styles.item} key={id}>
            <img className={styles.item__img} src={photo} alt={title} />
            <h1>{title}</h1>
            <p className={styles.item__preco}>R${price}</p>
                <div className={styles.item__descricao}>
                    <p className={styles.descricao}>{description}</p>
                    <p className={classNames({
                        [styles.item__tipo]: true,
                        [styles[`item__tipo__${category.label.toLowerCase()}`]]: true
                    })}>{category.label}</p>
                    <p>- Serve {serving} pessoa {serving === 1 ? "" : "s"}</p>
                    <p>{size}</p>
                </div>
            </div>  
    </div>
  )
}
