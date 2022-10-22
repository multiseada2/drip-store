import logo from '../../images/logo.png'
import buyCar from '../../images/buy.png'
import iconSearch from '../../images/search.png'

const Header = () => {
    return(
        <header>
            <div>
                <div>
                    <img src={logo}/>
                    <h1>Drip Store</h1>
                </div>

                <div>
                    <input type="search" placeholder="Pesquisar produto" />
                    
                    <button>
                        <img src={iconSearch}/>
                    </button>
                </div>
                
                <div>
                    <a href="#">Cadastre-se</a>
                    <a href="#">Entrar</a>
                </div>

                <button>
                    <img src={buyCar} />
                </button>

            </div>

            <nav>
                <a href="#">Home</a>
                <a href="#">Produtos</a>
                <a href="#">Categorias</a>
                <a href="#">Meus Pedidos</a>
            </nav>

        </header>
    )
}

export default Header;