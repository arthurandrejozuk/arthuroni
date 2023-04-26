import styles from './Cardapio.module.scss'
import Cabecalho from 'componentes/Cabecalho'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Main from 'componentes/Main'
import { useState } from 'react'

export default function Cardapio({}){
  
    return(
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <Cabecalho />
            <Main/>
        </main>
        
    )
}