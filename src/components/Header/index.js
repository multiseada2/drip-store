import logo from '../../images/logo.png'
import buyCar from '../../images/buy.png'
import iconSearch from '../../images/search.png'
import './header.css'
const Header = () => {
    return (
        <header>
            <div>
                <div class="name_logo">
                    <div class="header_logo">
                        <img src={logo} />
                    </div>
                    <h1><b>D</b>rip Store</h1>
                </div>

            </div>

            <nav>
                <div class="search_box">
                    <input type="search" placeholder="Pesquisar produto" />

                    <button>
                        <img src={iconSearch} />
                    </button>

                    <button>
                        <img src={buyCar} />
                    </button>
                </div>

            </nav>

            <nav>
                <ol>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Categorias</a></li>
                    <li><a href="#">Meus Pedidos</a></li>
                    <li><a href="#">Cadastre-se</a></li>
                    <li><a href="#">Entrar</a></li>
                </ol>
            </nav>

        </header >
    )
}

export default Header;