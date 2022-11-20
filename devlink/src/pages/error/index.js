import './erro.css'
import {Footer} from '../../components/footer'
import {Logo} from '../../components/logo'
import {Link} from 'react-router-dom'

export default function Error(){
    return(
        <div className="erro">
            <Logo/>
            <h1>Nada por aqui 😦😞🤨 </h1>

            <Link className='btnHome' to={"/"}>
                Voltar para a home
            </Link>

            <Footer/>
        </div>
    )
}