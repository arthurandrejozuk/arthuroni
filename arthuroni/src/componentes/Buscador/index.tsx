import styles from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg';
interface Props {
  busca: string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <div className={styles.buscador}>
         <input placeholder='Buscar' type="text"
         value={busca}
         onChange={(evento =>{
          setBusca(evento.target.value)
         })} />
         <CgSearch size={24}  />
    </div>
   
  )
}
