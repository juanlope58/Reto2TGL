import { useState } from "react";

const FormularioCita = ({agregarCita}) => {
    const [form, setForm] = useState({
        petName:'',
        age:'',
        gender:'',
        date:'',
        clientName:'',
    });

    const handleInputChange = (event) => {
        event.preventDefault();
        setForm({...form, [event.target.name]: event.target.value})
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        agregarCita(form);
        setForm({
            petName:'',
            age:'',
            gender:'',
            date:'',
            clientName:'',
        })
    }

    return(
        <div>
            <form className="form-card" onSubmit={handleFormSubmit}>               
                <input type="text" name="petName" placeholder="Nombre mascota" value={form.petName} onChange={handleInputChange} />
                <input type="number" name="age" placeholder="Edad" value={form.age} onChange={handleInputChange} />
                <select name="gender" value={form.gender} onChange={handleInputChange}>
                    <option value="">Género</option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                </select>
                <input type="date" name="date" value={form.date} onChange={handleInputChange}/>
                <input type="text" name="clientName" value={form.clientName} placeholder="Nombre del cliente" onChange={handleInputChange}/>
                <button type="submit" >Agendar cita</button>
            </form>
        </div>
    )
}

export default FormularioCita;