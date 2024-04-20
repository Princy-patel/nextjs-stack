"use client";

import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [imagePicker, setImagePicker] = useState();

  const imageInput = useRef();
  const handlePickClick = function () {
    imageInput.current.click();
  };

  const handleImageChange = function (event) {
    const file = event.target.files[0];

    if (!file) {
      setImagePicker(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImagePicker(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!imagePicker && <p>No image picked yet.</p>}
          {imagePicker && (
            <Image src={imagePicker} alt="The Image selected by user." fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />

        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
