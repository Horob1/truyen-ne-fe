import axios from '../../../utils/axiosCustomize';
export const createNovel = async (
  name,
  description,
  author,
  categories,
  photo,
  coverImg
) => {
  const data = new FormData();
  data.append('name', name);
  data.append('description', description);
  data.append('author', author);
  data.append('categories', categories);
  if (photo) data.append('photo', photo);
  if (coverImg) data.append('coverImg', coverImg);
  return await axios.post(`/api/novel`, data);
};

export const getMyNovel = async () => {
  return await axios.get(`/api/novel/myNovel`);
};
