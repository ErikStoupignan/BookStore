import React from 'react';
import './Categories.scss';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);

  return (
    <div className="ContainerCategories">
      <span className="Alert-underConstruction">{status}</span>
      <button onClick={() => dispatch(checkStatus())} className="btnCategories" type="button">Check status</button>
    </div>
  );
};

export default Categories;
