import React, { useState } from 'react';
import Modal from '../Modal';


// const PhotoList = ({ category }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentPhoto, setCurrentPhoto] = useState();

 

  //going through each photo in the photos array to find every photo that matches the 'category' selected; if photo matches the condition, it is returned in an array and assigned to 'currentPhotos'
  // const currentPhotos = photos.filter((photo) => photo.category === category);

  // const toggleModal = (image, i) => {
  //   // current photo
  //   setCurrentPhoto({...image, index: i});
  //   setIsModalOpen(!isModalOpen);

  // }

  // testing

  const PhotoList = ({ category }) => {
  
    const [photos] = useState([
      {
        name: 'Grocery aisle',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Grocery booth',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Building exterior',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Restaurant table',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Cafe interior',
        category: 'commercial',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Cat green eyes',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Green parrot',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Yellow macaw',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Pug smile',
        category: 'portraits',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Pancakes',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Burrito',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Scallop pasta',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Burger',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Fruit bowl',
        category: 'food',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Green river',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Docks',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Panoramic village by sea',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Domestic landscape',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
      {
        name: 'Park bench',
        category: 'landscape',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      },
    ]);
  
    //use filterMethod so that only photos w/ the selected category appear
    //going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user
    //If a photo matches the condition, it is returned in an array and assigned to currentPhotos. Then we can map the currentPhotos array to render each photo that matches the category selected by the user
    const currentPhotos = photos.filter((photo) => photo.category === category);
  
    return (
      <div>
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoList;