import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const NotFound = () => {
    const navigate = useNavigate();

    let [contador, setContador] = useState(5);

    useEffect(() => {
        const parar = setTimeout(() => {
            setContador(--contador)
        }, 1000)
        setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => {
            clearTimeout(parar)
        }
    });

    return (
        <div className="centro">
            <img src="https://http.cat/404" alt="Foto Erro 404 Gatinho" />
            <h2>Redirecionando em {contador} segundos</h2>
        </div>
    )
}
export default NotFound;
