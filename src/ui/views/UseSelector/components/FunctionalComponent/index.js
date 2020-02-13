import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as NumberAction from '../../../../../store/actions/numberAction';

const FunctionalComponent = () => {
  const number = useSelector(
    state => state.number.toIncrementFunctionalComponent
  );
  const dispatch = useDispatch();

  return (
    <div>
      <p>Voce clicou {number} vezes</p>
      <button
        className="btn btn-primary"
        onClick={() =>
          dispatch(NumberAction.incrementNumberFunctionalComponent(number))
        }
      >
        Clique
      </button>
    </div>
  );
};

export default FunctionalComponent;
