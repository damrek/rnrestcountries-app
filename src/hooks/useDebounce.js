import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cleanAll } from '../features/filter/filterSlice';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
      dispatch(cleanAll());
    };
  }, [value, delay, dispatch]);

  return debouncedValue;
};
