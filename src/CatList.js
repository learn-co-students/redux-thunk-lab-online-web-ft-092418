import React from 'react';

const CatList = (props) => {
  function renderCats() {
    if (props.catPics) {
      return props.catPics.map((catPic, index) => {
        return <li key={index}> <img src={catPic.url} alt='cat'/> </li>
      });
    };
  };

  return (
    <div>
      { renderCats() }
    </div>
  );
};

export default CatList
