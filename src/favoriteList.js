import React, { Component } from 'react'

class FavoriteList extends Component {
	render() {
		console.log('Props', this.props)
		return (            
			<ul> {
              this.props.profilesObject.map((profile) => (             
        		<li key={profile.id}>
        			<p>{this.props.favNameFilmObject[profile.id-1][0]} likes: {this.props.favNameFilmObject[profile.id-1][1]}</p>
        		</li>
      		))}
        </ul>
      )
    }
}

export default FavoriteList 