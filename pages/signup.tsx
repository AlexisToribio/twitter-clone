import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, FormProvider } from 'react-hook-form';
import axios from '../config/axios';

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
  password: yup.string().min(8).max(20).required(),
  confirmPassword: yup.string().min(8).max(20).required(),
  b_date: yup.string().required(),
});

type Props = {
  toggleShow: boolean;
  setToggleShow: (toggleShow: boolean) => void;
};

function Signup({ toggleShow, setToggleShow }: Props) {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = methods.handleSubmit((data: FormData) => {
    const { name, email, password, b_date } = data;

    axios
      .post('/auth/register', {
        name,
        email,
        password,
        b_date,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <h1 className="ml-14 text-3xl font-bold">Crea tu cuenta</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col items-center justify-center"
        >
          <Input type="text" label="Nombre" data="name" />
          <Input type="email" label="Correo electrónico" data="email" />
          <Input type="password" label="Contraseña" data="password" />
          <Input
            type="password"
            label="Confirmar contraseña"
            data="confirmPassword"
          />
          <Input type="date" label="Fecha de cumpleaños" data="b_date" />
          <Button
            type="submit"
            toggleShow={toggleShow}
            setToggleShow={setToggleShow}
            style="primary"
          >
            Registrar
          </Button>
        </form>
      </FormProvider>
    </>
  );
}

export default Signup;
