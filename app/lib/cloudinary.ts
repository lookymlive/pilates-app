import axios from 'axios';

export const uploadImageToCloudinary = async (fileUri: string) => {
  const data = new FormData();
  data.append('file', {
    uri: fileUri,
    type: 'image/jpeg',
    name: 'photo.jpg',
  } as any);
  data.append('upload_preset', 'tu_upload_preset');

  const res = await axios.post('https://api.cloudinary.com/v1_1/tu_cloud_name/image/upload', data);
  return res.data.secure_url;
};
