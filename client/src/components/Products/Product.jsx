import React from 'react';
import {Link} from 'react-router-dom';

const Product = props => {
  const {id, name, price, image, description, pet_category, sub_category} = props.product;
  return (
    <div className="card">
      <button className="delete-btn">x</button>
      <h1 className="title">{name}</h1>
      <p className="description">{description}</p>
      <div className="product-image">
        <Link to={`/product/${id}`}>
          <img src={image} alt="product" />
        </Link>
      </div>
      <p className="price">{price}$</p>
      <p className="sub-category">{sub_category}</p>
      <p className={`forPet ${pet_category}`}>{pet_category}</p>
      <button className="add-to-cart">Add to Cart</button>
      <button className="edit-btn">Edit Product</button>
    </div>
  );
};

export default Product;
