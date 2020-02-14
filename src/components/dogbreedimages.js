import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages(props) {
  const { images, breed } = props;
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      This Page will show images of the {breed} breed.
      <div>
        {images && images.map(url => <img src={url} alt="Dog" />)}
        {!images && "Loading..."}
      </div>
      <Link to="/">Go back to index</Link>
    </div>
  );
}
