import React, { useState } from 'react';
import { Path, useFormContext } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  b_date: string;
}

type InputProps = {
  data: Path<IFormData>;
  label: string;
  type: string;
  check?: boolean;
};

function Input({ label, data, type, check = false }: InputProps) {
  const { register } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [typeInput, setTypeInput] = useState(type);
  return (
    <label className="relative mt-2 flex w-11/12 flex-col  items-center justify-center">
      <span className="mb-3 w-11/12 text-lg font-semibold text-gray-900">
        {label}
      </span>
      <div className="relative w-11/12">
        <input
          type={typeInput}
          {...register(data)}
          className="focus:border-100 w-full rounded-md border-2 px-2  py-4 outline-none focus:border-twitter-blue-normal"
        />
        {check && (
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
              showPassword ? setTypeInput('password') : setTypeInput('text');
            }}
            className="absolute top-5 right-3.5 w-5"
          >
            {showPassword ? <EyeIcon /> : <EyeOffIcon />}
          </button>
        )}
      </div>
    </label>
  );
}

export default Input;
