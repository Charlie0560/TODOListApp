import React from 'react';
import { List , ListItem, ListItemText, ListItemAvatar, Avatar, Button} from "@mui/material";
import db from './firebase'

function Todo(props) {
    
    return (
        <div>
            <List className="todo__list">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline"/>
                </ListItem>
                <Button onClick={event=> db.collection('todos').doc(props.todo.id).delete()}>Delete</Button>
            </List>
        </div>
    )
}

export default Todo;