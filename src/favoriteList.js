import React, { Component } from 'react'

class FavoriteList extends Component {
	render() {
      console.log('Props', this.props)
      return (
      	<ul>
		   	{this.props.profilesObject.map((profile) => (
        		<li key={profile.id}>
        			{profile.id}
        		</li>
      		))}

        </ul>
      )
    }
}

export default FavoriteList