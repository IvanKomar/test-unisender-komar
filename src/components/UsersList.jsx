import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, List } from '@material-ui/core';
import UserListItem from './UserListItem'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1020,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  text: {
    marginLeft: '40px',
  },
  btn: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '34px',
    outline: 'none',
    boxShadow: 'none'
  },
  largeAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: '20px',
    marginBottom: '20px'
  },
  linkStyle: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: 'black'
  }
}));

export default function UsersList(props) {

  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <List >
        { props.users.map((user) => 
            <UserListItem
              key={user.id}
              id={user.id}
              url={user.html_url}
              avatar={user.avatar_url}
              classes={classes}
              login={user.login}
            />
        )
        }
      </List>
    </Container>
  )
}