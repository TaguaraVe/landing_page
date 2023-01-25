import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './userMailValidations';

const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: '',
    subject: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        valores,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Thanks for your email!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsSending(false);
          reset();
        },
        (err) => {
          toast.error('Ups.. There is a problem :)', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
          });
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <div className=" w-full flex flex-col justisfy-between items-start  f-full">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <form
        className="flex flex-col w-[75%] mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="myFlex">
          <label htmlFor="user_name" className="inline-block w-[65px]">
            Nombre:
          </label>
          <input
            {...register('user_name')}
            placeholder="Nombre:"
            className="flex-1 py-[.3rem] px-2 bg-lightGreen border-b-4 border-transparent focus:border-darkGreen outline-none rounded-lg transition ease-in-out duration-500 "
          />
        </div>
        <p className="text-sm text-red-400 pt-0 mb-4 pl-[70px]">
          {errors.user_name?.message}
        </p>
        <div className="myFlex">
          <label htmlFor="subject" className="inline-block w-[65px]">
            Asunto:
          </label>
          <input
            {...register('subject')}
            placeholder="Asunto:"
            className="flex-1 py-[.3rem] px-2 bg-lightGreen border-b-4 border-transparent focus:border-darkGreen outline-none rounded-lg transition ease-in-out duration-500 "
          />
        </div>
        <p className="text-sm text-red-400 pt-0 mb-4 pl-[70px]">
          {errors.subject?.message}
        </p>
        <div className="myFlex">
          <label htmlFor="email" className="inline-block w-[65px]">
            Email:
          </label>
          <input
            {...register('email')}
            placeholder="Email:"
            className="flex-1 py-[.3rem] px-2 bg-lightGreen border-b-4 border-transparent focus:border-darkGreen outline-none rounded-lg transition ease-in-out duration-500 "
          />
        </div>
        <p className="text-sm text-red-400 pt-0 mb-4 pl-[70px]">
          {errors.email?.message}
        </p>
        <div className="myFlex">
          <label htmlFor="messaje" className="inline-block w-[65px]">
            Mensaje:
          </label>
          <textarea
            {...register('message')}
            cols="30"
            rows="5"
            placeholder="Mensage"
            className="flex-1 py-[.3rem] px-2 bg-lightGreen border-b-4 border-transparent focus:border-darkGreen outline-none rounded-lg transition ease-in-out duration-500 "
          ></textarea>
        </div>
        <p className="text-sm text-red-400 pt-0 mb-4 pl-[70px]">
          {errors.message?.message}
        </p>
        {!isSending && (
          <button
            className="block mt-8 py-2 px-6 bg-darkGreen text-myWhite cursor-pointer rounded-xl hover:bg-myWhite hover:text-darkGreen"
            type="submit"
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
