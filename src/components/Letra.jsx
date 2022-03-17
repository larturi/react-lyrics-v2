import useLetras from "../hooks/useLetras";
import { Alerta } from "./Alerta";

export const Letra = () => {

  const { letra, loading } = useLetras();

  return (
    loading ? <Alerta>Cargando...</Alerta> : 
    <div className="letra">{letra}</div>
  )
}
