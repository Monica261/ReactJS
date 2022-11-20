import {Footer} from '../../components/footer'
import {Logo} from '../../components/logo'
import './home.css'

export default function Home(){
    return(
        <div className="home-container">
            <h1>Mônica Torres</h1>
            <span>Veja os links 👇</span>

            <main className="links">
                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Instagram</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Instagram</p>
                    </a>
                </section>

                <section className="link-area">
                    <a href="#">
                        <p className="link-text">Instagram</p>
                    </a>
                </section>
            </main>
            <Footer/>
        </div>
    )
}