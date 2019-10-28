import React, { Component } from 'react'

class FavoriteList extends Component {
	render() {
      console.log('Props', this.props)
      return (
 

        <p>{this.props.usersObject[0].name}</p>

      )
    }
}

export default FavoriteList 