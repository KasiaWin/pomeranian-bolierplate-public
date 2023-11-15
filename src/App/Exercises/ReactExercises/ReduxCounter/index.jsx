import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  reset,
} from '../../../../store/slices/counterSlice';

export const ReduxCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>Ćwiczenie związane z React+Redux!</h1>
      <div>
        <div>{count}</div>
        <button onClick={handleAdd}>DODAJ</button>
        <button onClick={handleDecrement}>ODEJMIJ</button>
        <button onClick={handleReset}>RESETUJ</button>
      </div>
    </div>
  );
};
