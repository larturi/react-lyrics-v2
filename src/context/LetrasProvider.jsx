import { useState, createContext } from 'react';
import axios from 'axios';

const LetrasContext = createContext();

const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');
    const [loading, setLoading] = useState(false);

    const busquedaLetra = async (busqueda) => {
        try {
            setLoading(true);
            const url = `https://api.lyrics.ovh/v1/${busqueda.artista}/${busqueda.cancion}`;
            const { data } = await axios.get(url);
            setLetra(data.lyrics.replace(/(\n\n)/g, '\r\n'));
            setAlerta('');
        } catch (error) {
            setAlerta('No se encontró la letra de la canción');
            console.error(object);
        }
        setLoading(false);
    }

    return (
        <LetrasContext.Provider
            value={{
                alerta,
                letra,
                loading,
                setAlerta,
                busquedaLetra
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext;