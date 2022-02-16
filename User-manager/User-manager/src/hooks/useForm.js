import { useState } from "react"

const useForm = (initial) => {
    const [form, setform] = useState({
        name: '',
        lastname: '',
        email: ''
    })
    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const reset = () => {
        setform(initial)
    }

    return [form, handleChange, reset]
}

export default useForm