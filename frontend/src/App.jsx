import { useForm } from "react-hook-form";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState();

  const submitForm = (data) => {
    console.log(data.picture[0]);
    // use FormData to send the file to the server
    const formData = new FormData();

    formData.append("picture", data.picture[0]);
    formData.append("name", data.name);

    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => {
        setImage(res.data.url.path);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(image);

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <input
          {...register("name", { required: "Recipe name is required" })}
          type="text"
          id="name"
        />
        {/* File input to upload the image */}
        <input
          {...register("picture", {
            required: "Image is required",
          })}
          type="file"
          id="picture"
        />
        <input type="submit" />
      </form>
      {image ? (
        <img width={400} src={image} alt="" />
      ) : (
        <p>La imagen no esta subida todavía</p>
      )}
    </>
  );
}

export default App;
