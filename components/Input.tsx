import React from 'react';
import { Path, useFormContext } from 'react-hook-form';

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
};

function Input({ label, data, type }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <label className="mt-6 flex w-11/12 flex-col  items-center justify-center">
      <span className="mb-3 w-11/12 text-lg font-semibold text-gray-900">
        {label}
      </span>

      <input
        type={type}
        {...register(data)}
        className="focus:border-100 w-11/12 rounded-md border-2 px-2  py-4 outline-none focus:border-twitter-blue-normal"
      />
      {errors.data && errors.data?.message && (
        <span className="text-xl text-gray-900">{errors.data.message}</span>
      )}
    </label>
  );
}

export default Input;
