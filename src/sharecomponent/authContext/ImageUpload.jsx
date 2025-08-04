import axios from "axios";

const ImageUpload = async (imgData) => {
  const formData = new FormData();
  formData.append("image", imgData);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  console.log(data);
  const img_url = data.data.display_url;
  return img_url;
};

export default ImageUpload;
