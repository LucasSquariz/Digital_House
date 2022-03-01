import git from './github1.png';
import mail from './mail1.png';

function Footer() {
    return (
        <>

            <footer id="footer" className='d-flex flex-wrap justify-content-center align-items-center  border-top text-light bg-dark'>
                <h5>Informações para contato</h5>

            </footer>
            <div className="contato d-flex flex-wrap justify-content-center  align-items-center text-light bg-dark">
                <a href="https://github.com/LucasSquariz">
                    <img src={git} width="30" height="30" alt="GitHub"></img>
                </a>
                <a href="mailto:lucsilsqua@gmail.com">
                    <img src={mail} width="30" height="30" alt="lucsilsqua@gmail.com"></img>
                </a>
            </div>
        </>
    )
}

export default Footer;