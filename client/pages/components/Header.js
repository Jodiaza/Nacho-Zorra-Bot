import Styled from '@emotion/styled'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledHeader = Styled.div`
    background-color: #466B3F;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    .navbar {
        a {
            color: white;
        }
        button {
            margin: 8px 0 8px 24px;
            svg {
                width: 32px;
                // fill: #94B43Be;
            }
        }
        div {
            text-align: center;
        }
    }
    .nacho-zorra {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: #466B3F;
        border: 3px solid white;
        position: fixed;
        top: -20px;
        left: 0;
        right: 0;
        // bottom: 0;
        margin: auto;
        display: flex;
        align-items: center;
        text-align: center;
        img {
            width: 75%;
            height: 75%;
        }
    }
    .show {
        padding-top: 40px;
    }
    .navbar-nav {
        padding: 10px 0;
    }
    .nav-item {
        padding: 0 100px;
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className='nacho-zorra'>
                <Link href="/">
                    <a><img src="foxbot.png" alt="Nacho Zorra" /></a>
                </Link>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={['fas', 'bars']} color='#94B43B' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/proyecto">
                                    <a className="nav-link" aria-current="page">PROYECTO</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contacto">
                                    <a className="nav-link">CONTACTO</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </StyledHeader>

    )
}

export default Header;