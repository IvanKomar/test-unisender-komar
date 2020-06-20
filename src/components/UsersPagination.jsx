import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '45px'
  },
}));

export default function UsersPagination(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination variant="outlined" size={'large'} count={props.count} page={props.page} onChange={props.onChange} hidePrevButton hideNextButton />
    </div>
  );
}