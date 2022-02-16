import useForm from '../hooks/useForm'
import Input from './Input'
import Button from './Button'

const UserForm = ({ submit }) => {
    
    const [form, handleChange, reset] = useForm({
        name: '',
        lastname: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(form.name !== '' || form.lastname !== '' || form.email !== ''){
            submit(form)
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input 
            name='name'
            placeholder='Name'
            label='Name'
            value={form.name}
            onChange={handleChange}      
            />
            <Input 
            name='lastname'
            placeholder='Last name'
            label='Last name'
            value={form.lastname}
            onChange={handleChange}      
            />
            <Input 
            name='email'
            placeholder='mail@server.com'
            label='Email'
            value={form.email}
            onChange={handleChange}      
            />
            <Button>Send</Button>
        </form>
    )
}

export default UserForm;