import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';
import Notification from '../components/Notification';
import Modal from '../components/Modal';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { login } from '../services/login';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(30),
});

function Signin() {
  const router = useRouter();
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = methods.handleSubmit((credentials: FormData) => {
    const { email, password } = credentials;

    login(email, password)
      .then((res) => {
        setError(false);
        window.localStorage.setItem('auth-token', res.data.token);
        router.push('/home');
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.response.data.error.message);
      });
  });
  return (
    <Modal>
      <h1 className="text-center text-3xl font-bold">Iniciar sesión</h1>
      {error && <Notification error={error} message={errorMessage} />}

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
          <Button type="submit" style="primary">
            Iniciar Sesión
          </Button>
        </form>
      </FormProvider>
    </Modal>
  );
}

export default Signin;
