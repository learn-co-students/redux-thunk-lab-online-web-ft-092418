import React, { Component } from "react"

class CatList extends Component {

  renderPics = pics => {
    console.log("pics", pics)
    if (pics) {
      return pics.map(pic => <img key={pic.id} src={pic.url} alt=""/>)
    }
  }
  //

  render() {
    return (
      <ul>
        {this.renderPics(this.props.catPics)}
      </ul>
  )}
}

export default CatList
