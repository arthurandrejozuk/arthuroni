import Buscador from 'componentes/Buscador';
import styles from './main.module.scss';
import { useState, } from 'react';
import Filtro from 'componentes/Filtros';
import Ordenador from 'componentes/Ordenador';



export default function Main() {
  const [filtro, setFiltro] = useState<number | null>(null);
  const [busca, setBusca] = useState("")
  const [ordenador, setOrdenador] = useState("")
  return (
    <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>
            Cardápio      
        </h3>
        <Buscador 
          busca={busca} 
          setBusca={setBusca}
        />
        <div className={styles.cardapio__filtros}>
          <Filtro filtro={filtro} setFiltro={setFiltro}/>
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
          
    </section>
  )
}
