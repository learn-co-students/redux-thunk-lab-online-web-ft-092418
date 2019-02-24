import React, { Component } from 'react';

export default class CatList extends Component {
  render(){
    return (
      <ul>
      {this.props.catPics.map(pic => <li><img src={pic.url} /></li>)}
      </ul>
    )
  }
}
