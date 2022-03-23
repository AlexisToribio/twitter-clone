import axios from '../config/axios';

export const createAccount = async (
  name: string,
  email: string,
  password: string,
  b_date: string
) => {
  const response = await axios.post('/auth/register', {
    name,
    email,
    password,
    b_date,
  });
  return response;
};

export const login = (email: string, password: string) => {
  return axios.post('/auth/login', {
    email,
    password,
  });
};
