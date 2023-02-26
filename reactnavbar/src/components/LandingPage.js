import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./LandingPage.css";
const LandingPage = () => {
  const [picture, setPicture] = useState({});

  const uploadPicture = (e) => {
    setPicture({
      /* contains the preview, if you want to show the picture to the user
           you can access it with this.state.currentPicture
       */
      picturePreview: URL.createObjectURL(e.target.files[0]),

      /* this contains the file we want to send */
      pictureAsFile: e.target.files[0],
    });
    // console.log(picturePreview);
  };

  const setImageAction = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", picture.picturePreview);

    console.log(picture.pictureAsFile);
    console.log(picture.picturePreview);

    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }

    const data = await fetch("http://localhost:3000/upload/post", {
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      body: formData,
    });
    const uploadedImage = await data.json();
    if (uploadedImage) {
      console.log("Successfully uploaded image");
    } else {
      console.log("Error Found");
    }
  };

  return (
    // <div className="content landing" >
    //   <form onSubmit={setImageAction}>
    //     <input type="file" name="image" onChange={uploadPicture} />
    //     <button type="submit" name="upload">
    //       Upload
    //     </button>
    //   </form>
    // </div>

    <div className="row">
      <form onSubmit={setImageAction}>
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" accept="image/*" onChange={uploadPicture} />
          </label>
        </div>

        <div className="col-4">
          <button className="btn btn-success btn-sm block magenta margin-auto ">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default LandingPage;
