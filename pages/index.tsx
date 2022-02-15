import Head from 'next/head';
import React, { useState } from 'react';
import IconTwitter from '../components/IconTwitter';
import Button from '../components/Button';
import Modal from '../components/Modal';
import Signup from './signup';
import Signin from './signin';

export default function Home() {
  const [toggleShowSU, setToggleShowSU] = useState(false);
  const [toggleShowSI, setToggleShowSI] = useState(false);

  return (
    <div className="relative flex justify-center">
      <Head>
        <title>Twitter clone</title>
      </Head>
      {toggleShowSU && (
        <Modal setToggleShow={setToggleShowSU}>
          <Signup setToggleShow={setToggleShowSU} />
        </Modal>
      )}
      {toggleShowSI && (
        <Modal setToggleShow={setToggleShowSI}>
          <Signin setToggleShow={setToggleShowSI} />
        </Modal>
      )}
      <div className="lg:flex lg:h-screen lg:w-screen lg:flex-row-reverse">
        <div className="flex w-full max-w-md flex-col flex-wrap items-center md:max-w-full lg:justify-center">
          <div className="my-12 flex w-full lg:mt-0 lg:justify-center">
            <IconTwitter className="ml-8 h-auto w-12 fill-twitter-blue-normal md:ml-20 md:w-16 lg:ml-0 lg:w-20" />
          </div>
          <h1 className="ml-8 mr-32 pt-2 text-4xl font-bold leading-normal md:mx-20 md:pt-0 md:text-6xl lg:mx-0 lg:text-center">
            Lo que está pasando ahora
          </h1>
          <h2 className="mt-8 text-2xl font-bold md:mt-12 md:text-4xl  lg:mt-16 lg:text-3xl">
            Únete a Twitter hoy mismo.
          </h2>
          <Button
            type="button"
            handleClick={() => setToggleShowSU(true)}
            style="primary"
          >
            Registrate
          </Button>
          <p className="mx-8 mt-1 text-xs md:mx-36 md:mt-2 md:text-sm lg:mx-10 lg:text-center">
            Al registrarte, aceptas los Términos de servicio y la Política de
            privacidad, incluída la política de Uso de Cookies.
          </p>
          <p className="mt-12 mr-36 font-bold md:mr-0">
            ¿Ya tienes una cuenta?
          </p>
          <Button
            type="button"
            handleClick={() => setToggleShowSI(true)}
            style="secondary"
          >
            Iniciar sesión
          </Button>
        </div>
        <div className="flex h-80 w-full items-center justify-center bg-backgroundTwitter bg-cover bg-no-repeat lg:h-full">
          <IconTwitter className="h-auto w-32 fill-white lg:w-72" />
        </div>
      </div>
    </div>
  );
}
