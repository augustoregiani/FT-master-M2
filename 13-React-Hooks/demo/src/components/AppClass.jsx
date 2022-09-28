import React from 'react';
import { connect } from 'react-redux';
import { saveName } from '../actions';

class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Class',
      width: window.innerWidth //ESTO lo que hace es mostrar el numerito del tamaño de la pantalla.
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name;
    window.addEventListener('resize', this.handleResize)
    console.log('componente Classe se monton')
  }

  componentDidUpdate() {
    document.title = this.state.name;
    console.log('componente Classe se modifico')
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    console.log('componente Classe se DESmonton')
  }

  handleResize() {
    this.setState({
      width: window.innerWidth
    })
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
      <input 
        value={this.state.name}
        onChange={this.handleNameChange}
      />
      <div>
        {this.state.width}
      </div>
      <button onClick={() => this.props.saveName(this.state.name)}>
        Save Name
      </button>
      <div>
        {this.props.nameRedux}
      </div>
    </div>
    )
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     saveName: (name) => dispatch(saveName(name))
//   }
// }

const mapStateToProps = (state) => {
  return {
    nameRedux: state.name
  }
}

export default connect(mapStateToProps, { saveName })(AppClass);