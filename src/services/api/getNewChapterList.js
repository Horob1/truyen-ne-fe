import axios from '../../utils/axiosCustomize';

const getNewChapterList = async (query) => {
  return await axios.get(`/api/collection/${id}`);
};

export default getNewChapterList;
