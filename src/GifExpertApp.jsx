import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// Hace referencia a toda la página

export const GifExpertApp = () => {
  // se recomienda introducir un valor inicial para que no lleve a undefined y cree inconvenientes

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      {/* Título de la app */}
      <h1>GiftExpertApp</h1>

      {/* Aquí tendremos un input, también en un componente independiente para poderlo manipular */}
      <AddCategory setCategories={setCategories} />
      {/* Listado actualizado de Gifs */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
