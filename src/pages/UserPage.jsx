import React from 'react';
import UserProfile from '../components/UserProfile'
import request from '../utils/request'
import { CircularProgress } from '@material-ui/core'

class UserPage extends React.Component {
  state = {
    user: null,
    loading: true
  }
  async componentDidMount() {
    const username = this.props.match.params.username
    await request({url: `users/${username}`}).then(res => {
      this.setState({user: res.data, loading: false})
    })
  }
  render() {
    const {user, loading} = this.state
    return loading ? <CircularProgress/> : <UserProfile user={user} /> 
  }
}

export default UserPage