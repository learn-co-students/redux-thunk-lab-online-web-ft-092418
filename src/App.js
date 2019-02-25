import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import CatList from './CatList'

class App extends Component {   
  componentDidMount() {
    this.props.fetchCats()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#" >CatBook</a>
              <CatList catPics={this.props.catPics.pictures} />
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        
      </div>
    );
  }
}

const mapStateToProps = state => { return {catPics: state.cats} }

const mapDispatchToProps = dispatch => {
  return { fetchCats: images => dispatch({ type: 'FETCH_CATS', images})}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
