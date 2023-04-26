import { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json'
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

interface Props{
    setOrdenador: React.Dispatch<React.SetStateAction<string>>,
    ordenador:string
  }
  
export default function Ordenador({ordenador, setOrdenador}: Props) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
    return (
    <button 
        onClick={() => setAberto(!aberto)} 
        onBlur={() => setAberto(false)}
        className={classNames({
            [styles.ordenador]:true,
            [styles["ordenador--ativo"]]: ordenador !== "",
        })}
    >
                <span>{nomeOrdenador || "Ordenar por:"}</span>
                {aberto ? < MdKeyboardArrowUp size={24}/> : < MdKeyboardArrowDown size={24}/>}
                <div className={classNames({
                    [styles.ordenador__options]: true,
                    [styles["ordenador__options--ativo"]]:aberto,
                })}>
                    {opcoes.map(opcao =>{
                        return(
                            <div onClick={()=> setOrdenador(opcao.value)} className={styles.ordenador__option} key={opcao.value}>
                                {opcao.nome}
                            </div>
                        )
                    })}
                </div>
    </button>
    )
}
