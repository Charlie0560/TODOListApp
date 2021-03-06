import React ,{useState} from 'react';
import { List , ListItem, ListItemText, Button, Modal} from "@mui/material";
import db from './firebase'
import '../App.css';
import 'animate.css'


const mystyle = {
    color: "black",
    backgroundColor: "#eee",
    padding: "10px",
    fontFamily: "Arial",
    width: "300px",
    margin: "50px"
  };

const styles = {
    width: "90%",
    height: "30px",
    margin: "5px 0 10px 0"
}


function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('')

    const updateTodo = () =>{
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true})
        setOpen(false);
    }
    return (
        <>
        <Modal open={open} onClose={e => setOpen(false)}>
            <div style={mystyle}>
                <h1>Edit</h1>
                <input style={styles} placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                <Button onClick={updateTodo} color="primary" variant="contained">Update Todo</Button>
            </div>
        </Modal>
        <center>

        <div className="container ">
            
            <List className="todo__list animate__animated animate__fadeInDownBig items">
                <ListItem>
                    <ListItemText primary={props.todo.todo} />
                </ListItem>
                <div className="buttons">
                    <i style={{color: 'blue'}} class="fas fa-edit" onClick={e=>setOpen(true)}></i>
                    <i style={{color: 'red'}} onClick={event=> db.collection('todos').doc(props.todo.id).delete()} class="far fa-trash-alt"></i>
                </div>
            </List>
        </div>
        </center>
        </>
    )
}

export default Todo;