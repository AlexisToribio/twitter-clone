import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';
import Modal from '../components/Modal';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import { useRouter } from 'next/router';
import { createAccount } from '../services/login';

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  b_date: string;
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8).max(30),
  confirmPassword: yup.string().required(),
  b_date: yup.string().required(),
});

function Signup() {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = methods.handleSubmit((data: FormData) => {
    const { name, email, password, b_date } = data;
    createAccount(name, email, password, b_date)
      .then((res) => {
        setError(false);
        router.push('/signin');
      })
      .catch((err) => {
        setError(true);
        setErrorMessage(err.response.data.error.message);
      });
  });
  return (
    <Modal>
      <h1 className="text-center text-3xl font-bold">Crea tu cuenta</h1>

      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col items-center justify-center"
        >
          <Input type="text" label="Nombre" data="name" />
          {methods.formState.errors.name?.type === 'required' && (
            <Error>Nombre es requerido</Error>
          )}
          <Input type="email" label="Correo electrónico" data="email" />
          {methods.formState.errors.email?.type === 'required' && (
            <Error>Email es requerido</Error>
          )}
          {error && <Error>{errorMessage}</Error>}
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
          <Input
            type="password"
            label="Confirmar contraseña"
            data="confirmPassword"
            check={true}
          />
          {methods.watch('password') !== methods.watch('confirmPassword') && (
            <Error>Contraseñas no coínciden</Error>
          )}
          <Input type="date" label="Fecha de cumpleaños" data="b_date" />
          {methods.formState.errors.b_date?.type === 'required' && (
            <Error>Fecha de cumpleaños es requerido</Error>
          )}
          <Button type="submit" style="primary">
            Registrar
          </Button>
        </form>
      </FormProvider>
    </Modal>
  );
}

export default Signup;
