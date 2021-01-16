import './App.css';
import react, { Component } from 'react';
import { connect } from 'react-redux';
import LPerson from '../components/LPerson';
import ErrorBoundry from '../components/ErrorBoundry';
import { requestCharacter } from '../actions';

const mapStateToProps = state => {
  return {
    Character: state.requestCharacter.Character,
    isPending: state.requestCharacter.isPending,
    error: state.requestCharacter.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCharacter: () => dispatch(requestCharacter())
  }
}


class App extends Component {
  async componentDidMount(){
      this.props.onRequestCharacter();
  }

  render(){
    const { Character, isPending } = this.props;
    return (
      <div className=' tc'>
        <h1 className='f1 tc'>Simple Fetch API star wars character</h1>
        { isPending ? <h1>loading...</h1> :
          <ErrorBoundry>
            <LPerson  Character={Character}/>
          </ErrorBoundry>  
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
