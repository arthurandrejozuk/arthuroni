import styles from '../item/itens.module.scss';
import itens from './itens.json';
import Item from 'componentes/item';
import {useState, useEffect} from 'react';

interface Props {
  busca: string,
  filtro: number|null,
  ordenador: string
}

export default function Itens({busca, filtro, ordenador}:Props) {
  const [lista, setLista] = useState(itens)

  function ordenar(lista: typeof itens){
      switch(ordenador){
        case 'porcao':
          return lista.sort((a, b) => 
            a.size > b.size ? 1 : -1
          )
        case 'pessoas':
          return lista.sort((a, b) => 
            a.serving > b.serving ? 1 : -1
          )
        case 'preco':
          return lista.sort((a, b) =>
            a.price > b.price ? 1 : -1
          )
        default:
          return lista
      }
  }

  function testaBusca(title: string){
    const regex = new RegExp(busca, 'i');
    return regex.test(title)
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true
  }
  useEffect(() =>{
      const novaLista = itens.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
      setLista(ordenar(novaLista));
  },[busca, filtro, ordenador])

  return (
    <div className={styles.itens}>
        {lista.map((item) =>(
            <Item key={item.id} {...item} />
        ))}
    </div>
  )
}
