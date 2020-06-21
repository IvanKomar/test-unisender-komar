import React from 'react'
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Fab
} from '@material-ui/core'
import {Link} from 'react-router-dom'
export default function UserListItem({classes, login, avatar, id, url}) {
  
  const openBlankProfile = () => {
    window.open(url,'_blank')
  }
  
  return (
    <ListItem divider className={classes.root} key={id}>
      <Link to={`/users/${login}`} className={classes.linkStyle}>
        <ListItemAvatar>
          <Avatar
            className={classes.largeAvatar}
            alt={login}
            src={avatar}
          />
        </ListItemAvatar>
        <ListItemText className={classes.text} id={id} primary={login} />
      </Link>
      <ListItemSecondaryAction>
        <Fab
          className={classes.btn}
          variant="extended"
          size="small"
          color="inherit"
          onClick={openBlankProfile}
        >
          Кнопка
        </Fab>
      </ListItemSecondaryAction>
    </ListItem>
  )
}