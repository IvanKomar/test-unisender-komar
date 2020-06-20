import React from 'react'
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  makeStyles, 
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    maxWidth: 1020,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '40px'
  },
  content: {
    flex: '1 0 auto',
  },
  largeAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginTop: '15px',
    marginBottom: '15px',
    marginLeft: '40px'
  },

}));

export default function UserProfile(props) {
  const classes = useStyles();
  const {user} = props
  return (  
    <Container>
      <Card className={classes.root}>
      <CardMedia >
        <Avatar
          className={classes.largeAvatar}
          src={user.avatar_url}
        />
      </CardMedia>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h4" variant="h4">
            {user.name}
          </Typography>
          <Typography variant="subtitle1">
            {`${user.company != null ? user.company + ', ' : ''} ${user.location}`}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {new Date(user.created_at).toLocaleDateString('en-GB')}
          </Typography>
        </CardContent>
      </div>
    </Card>
    </Container>
  )
}