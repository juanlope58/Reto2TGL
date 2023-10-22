import Cita from "./Cita";

const ListaCitas = ({citas}) => {

    return(
        <div className="content-list-citas">
            <h2>Lista de Citas</h2>
            {citas.length > 0 ? (
                citas.map((cita,index)=> 
                <Cita key={`${cita.date}${cita.petName}${index}`} cita={cita}/>
                )
            ):(
                <p>No hay citas agendadas</p>
            )
            }
        </div>
    );
}

export default ListaCitas;