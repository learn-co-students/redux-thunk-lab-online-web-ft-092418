import React, { Component } from 'react';

class CatList extends Component {
    render () {  
        return (
            <ul>
               {this.props.catPics.map(c => <li><img key={c} src={c.url} /></li> )}
           </ul>   
        )
    }
}

export default CatList