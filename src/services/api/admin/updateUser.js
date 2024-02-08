import axios from '../../../utils/axiosCustomize';

export const updateUser = async (id, role) => {
  const data = {};
  data['role'] = role;
  return await axios.get(`/admin/update/${id}`, data);
};
