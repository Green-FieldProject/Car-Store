import React from 'react';
import OnePost from './OnePost';

function SearchList({ filtredData }) {
  const filtered = filtredData.map(item =>  <OnePost key={item.id} item={item} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;