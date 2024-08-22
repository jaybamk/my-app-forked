import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const SignupForm = () => {
  // Form validation schema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState: { errors }, watch } = useForm(formOptions);

  const onSubmit:any = data => {
    console.log(data);
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword')}
          onBlur={() => {
            if (password !== watch('confirmPassword')) {
              alert('Passwords do not match');
            }
          }}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
