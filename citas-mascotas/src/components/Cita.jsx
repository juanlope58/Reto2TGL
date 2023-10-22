const Cita = ({cita}) => {
    return(
        <div className="cita-card">
            <p><strong>Nombre Mascota: </strong>{cita.petName}</p>
            <p><strong>Edad: </strong>{cita.age}</p>
            <p><strong>Género: </strong>{cita.gender}</p>
            <p><strong>Día de la cita: </strong>{cita.date}</p>
            <p><strong>Nombre del dueño: </strong>{cita.clientName}</p>
        </div>
    )
}

export default Cita;