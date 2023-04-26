import styles from './Cabecalho.module.scss';

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <div className={styles.cabecalho__text}>
            A casa do codigo e da massa
        </div>
    </header>
  )
}
