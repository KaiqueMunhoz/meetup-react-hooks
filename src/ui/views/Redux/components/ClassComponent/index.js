import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NumberAction from '../../../../../store/actions/numberAction';

class ClassComponent extends Component {
  render() {
    const { incrementNumberClassComponent, number } = this.props;
    return (
      <div>
        <p>Voce clicou {number} vezes</p>
        <button
          className="btn btn-primary"
          onClick={() => incrementNumberClassComponent(number)}
        >
          Clique
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  number: state.number.toIncrementClassComponent,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(NumberAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent);
