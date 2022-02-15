import useFormulario from '../hooks/useFormulario'
import Input from './Input'
import Button from './Button'

const UserForm = ({ submit }) => {
    
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastname: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input 
            name='name'
            placeholder='Nombre'
            label='Nombre'
            value={formulario.name}
            onChange={handleChange}      
            />
            <Input 
            name='lastname'
            placeholder='Apellido'
            label='Apellido'
            value={formulario.lastname}
            onChange={handleChange}      
            />
            <Input 
            name='email'
            placeholder='pepito@server.com'
            label='Correo'
            value={formulario.email}
            onChange={handleChange}      
            />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm;

/** SE MANEJA ACA EL ESTADO DE LOS INPUT PARA Q NO TENGA Q RENDERIZAR TODA LA APLICACION CON CADA CAMBIO O CADA ONCHANGE DE LOS CAMPOS!!!! (PERFORMANCE) */