import React, { useState, useEffect } from 'react';

function CartShopping({ product, onSubtotalChange , index }) {
  const [Quantity, setQuantity] = useState(1);

  const { img, nameProduct, Price1 } = product;

  // Calculate Subtotal
  const Subtotal = Price1 * Quantity;

  // Notify the parent component whenever the subtotal changes
  useEffect(() => {
    onSubtotalChange(index, Subtotal);
  },[Quantity]);

  return (
    <tr key={nameProduct}>
      <th className="flex items-center space-x-3 pt-14">
        <img className="w-10" src={img} alt={nameProduct} />
        <h6>{nameProduct}</h6>
      </th>
      <th className="pt-14">${Price1}</th>
      <th className="pt-14">
        <input
          type="number"
          className="w-[60px]"
          value={Quantity}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value, 10);
            setQuantity(newQuantity || 1);
          }}
          min="1"
        />
      </th>
      <th className="pt-14">${Subtotal}</th>
    </tr>
  );
}

export default CartShopping;