import React from 'react'
import UsersList from '../components/UsersList'
import UsersPagination from '../components/UsersPagination'
import request from '../utils/request'
import { CircularProgress } from '@material-ui/core'
class UserListPage extends React.Component {
  state = {
    users: [],
    loading: true,
    totalPages: null,
    currentPage: 1,
    pageLimit: 5
  }
  async componentDidMount() {
    await request({url: 'users'}).then(res => {
      const users = res.data
      const totalPages = Math.ceil(users.length / this.state.pageLimit)
  
      this.setState({
        users, 
        totalPages,
        loading: false})
    })
  }

  pageHandler = (event, page) => {
    this.setState({currentPage: page})
  }
  
  render() {
    const { users, loading, totalPages, currentPage, pageLimit } = this.state
    const offset = (currentPage - 1) * pageLimit
    const shownUsers = users.slice(offset, offset + pageLimit)

    return (loading ? 
    <CircularProgress /> : 
    <React.Fragment>
      <UsersList 
        users={shownUsers} 
      />
      <UsersPagination 
        count={totalPages} page={currentPage} onChange={this.pageHandler}  
      />
    </React.Fragment>)
  
  }
}
export default UserListPage