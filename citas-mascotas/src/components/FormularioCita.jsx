import { useState } from "react";

const FormularioCita = ({agregarCita}) => {

    const [errors, setErrors] = useState({
        petName:'',
        age:'',
        gender:'',
        date:'',
        clientName:'',
    })

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

        let hayErrores = false;
        const nuevosErrores = {};

        if (!form.petName.trim()){
            nuevosErrores.petName = "El nombre de la mascota es requerido";
            hayErrores=true;
        }

        if (!form.age.trim()){
            nuevosErrores.age = "la edad es requerida";
            hayErrores=true;
        }

        if (!form.gender.trim()){
            nuevosErrores.gender = "El género de la mascota es requerido";
            hayErrores=true;
        }

        if (!form.date.trim()){
            nuevosErrores.date = "La fecha es requerida";
            hayErrores=true;
        }

        if (!form.clientName.trim()){
            nuevosErrores.clientName = "El nombre del cliente es requerido";
            hayErrores=true;
        }

        setErrors(nuevosErrores);
        if (!hayErrores) {
            agregarCita(form);
            setForm({
                petName:'',
                age:'',
                gender:'',
                date:'',
                clientName:'',
            })
        }

    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>               
                <input type="text" name="petName" placeholder="Nombre mascota" value={form.petName} onChange={handleInputChange} />
                {errors.petName && <p>{errors.petName}</p>}
                <input type="number" name="age" placeholder="Edad" value={form.age} onChange={handleInputChange} />
                {errors.age && <p>{errors.age}</p>}
                <select name="gender" value={form.gender} onChange={handleInputChange}>
                    <option value="">Género</option>
                    <option value="macho">Macho</option>
                    <option value="hembra">Hembra</option>
                </select>
                {errors.gender && <p>{errors.gender}</p>}
                <input type="date" name="date" value={form.date} onChange={handleInputChange}/>
                {errors.date && <p>{errors.date}</p>}
                <input type="text" name="clientName" value={form.clientName} placeholder="Nombre del cliente" onChange={handleInputChange}/>
                {errors.clientName && <p>{errors.clientName}</p>}
                <button type="submit" >Agendar cita</button>
            </form>
        </div>
    )
};


export default FormularioCita;