import React , {Component} from 'react';

const CatList = ({catPics}) => {

  const renderCats = catPics.map((catPic , id) =>
  <img src = {catPic.url} alt={id} key={id}/>
)
  return(<div>{renderCats}</div>)
}

CatList.defaultProps = { catPics: []} ;

export default CatList
