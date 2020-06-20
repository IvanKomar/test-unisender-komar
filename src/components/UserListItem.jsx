import React from 'react'
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Fab
} from '@material-ui/core';
import {Link} from 'react-router-dom'
export default function UserListItem(props) {
  
  return (
    <ListItem divider className={props.classes.root} key={props.id}>
      <Link to={`/users/${props.login}`} className={props.classes.linkStyle}>
        <ListItemAvatar>
          <Avatar
            className={props.classes.largeAvatar}
            alt={props.login}
            src={props.avatar}
          />
        </ListItemAvatar>
        <ListItemText className={props.classes.text} id={props.id} primary={props.login} />
      </Link>
      <ListItemSecondaryAction>
        <Fab
          className={props.classes.btn}
          variant="extended"
          size="small"
          color="inherit"
          onClick={() => {
            window.open(props.url,'_blank')
          }}
        >
          Кнопка
        </Fab>
      </ListItemSecondaryAction>
    </ListItem>
  )
}