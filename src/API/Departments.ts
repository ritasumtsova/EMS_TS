const axios = require('axios');

const DepartmentsAPI = {
  CONFIG: axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN!)}`,
    },
  }),

  getDepartments() {
    return DepartmentsAPI.CONFIG.get('/department');
  },

  getDepartmentInfo(id: number) {
    return DepartmentsAPI.CONFIG.get(`/department/${id}`);
  },
};

export default DepartmentsAPI;
