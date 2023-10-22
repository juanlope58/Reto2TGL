import Cita from "./Cita";

const ListaCitas = ({citas}) => {

    return(
        <div>
            <h2>Lista Citas</h2>
            {citas.length > 0 ? (
                citas.map((cita)=> 
                <Cita key={`${cita.date}${cita.petName}${cita.clientName}`} cita={cita}/>
                )
            ):(
                <p>No hay citas agendadas</p>
            )
            }
        </div>
    );
}

export default ListaCitas;