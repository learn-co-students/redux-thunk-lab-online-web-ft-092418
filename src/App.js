import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   
  handleOnClick = () => {
    this.props.fetchCats()
  }

  componentDidMount() {
    this.props.fetchCats();
  }
  
  render() {    
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <button onClick={this.handleOnClick} />
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return { fetchCats: () => dispatch(fetchCats()) }
}
 
function mapStateToProps(state){
  return {catPics: state.pictures}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App)
