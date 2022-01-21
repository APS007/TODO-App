import React,{useState} from 'react'
import { FormControl, Container, TextField,Button} from '@mui/material';

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(text)
        setText("")
    }
    return (
        <Container maxWidth="sm">
            <h1 style={{ marginLeft:40,color: "grey",display:"justify-around" }}>Welcome to Abhishek's Todo-App</h1>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth={true}>
                    <TextField label='Add some todos for today' onChange={e=>setText(e.target.value)} required={true}/>
                    <Button variant="contained" color="primary" type="submit" style={{marginTop:15}}>+ Add Todo</Button>
                </FormControl>
            </form>
        </Container>
    )
}

export default TodoForm
