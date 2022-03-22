import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';
import axios from '../config/axios';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { useForm, FormProvider } from 'react-hook-form';
import { AxiosResponse } from 'axios';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(30),
});

type userData = {
  data: {
    _id: string;
    name: string;
    email: string;
    password: string;
    b_date: string;
    __v: number;
  };
  token: string;
};

function Signin() {
  const router = useRouter();
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [successful, setSuccessful] = useState(false);
  const onSubmit = methods.handleSubmit((data: FormData) => {
    const { email, password } = data;
    axios
      .post('/auth/login', {
        email,
        password,
      })
      .then((res: AxiosResponse<userData>) => {
        localStorage.setItem('auth-token', res.data.token);
        setSuccessful(!successful);
        router.push('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1 className="text-center text-3xl font-bold">Iniciar sesión</h1>
      {successful ? (
        <div className="mt-12 flex flex-col items-center justify-center ">
          <div className="flex items-center justify-center">
            <h1 className="text-xl font-semibold">Sesión iniciada</h1>
            <CheckCircleIcon className="mt-1.5 ml-1 h-4 w-4 text-green-600" />
          </div>
        </div>
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col items-center justify-center"
          >
            <Input type="email" label="Correo electrónico" data="email" />
            {methods.formState.errors.email?.type === 'required' && (
              <Error>Email es requerido</Error>
            )}
            {methods.formState.errors.email?.type === 'email' && (
              <Error>Email debe ser valido</Error>
            )}
            <Input
              type="password"
              label="Contraseña"
              data="password"
              check={true}
            />
            {methods.formState.errors.password?.type === 'required' && (
              <Error>Contraseña es requerida</Error>
            )}
            {methods.formState.errors.password?.type === 'min' && (
              <Error>Contraseña debe tener almenos 8 caracteres</Error>
            )}
            {methods.formState.errors.password?.type === 'max' && (
              <Error>Contraseña debe tener máximo 30 caracteres</Error>
            )}
            <Button type="submit" style="primary">
              Iniciar Sesión
            </Button>
          </form>
        </FormProvider>
      )}
    </>
  );
}

export default Signin;
