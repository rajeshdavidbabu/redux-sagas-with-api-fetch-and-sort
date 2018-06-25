import React from 'react';


const generateStaticImageUrl = (hash) => (`https://cdn.aboutstatic.com/file/${hash}?width=600&height=600&quality=75&bg=F4F4F5&progressive=1&trim=1`);

export default ({image, name, brand, max_price}) => {
  const imageUrl = generateStaticImageUrl(image.hash),
  divStyle = {
    backgroundImage: 'url(' + imageUrl + ')',
    backgroundColor: '#'+image.background
  };
  return (
    <div className="productCardHolder">
      <div className="productCard" style={divStyle}></div>
      <div>{name}</div>
      <div>({brand.name})</div>
      <div>{max_price} Euros</div>
    </div>
  );
}