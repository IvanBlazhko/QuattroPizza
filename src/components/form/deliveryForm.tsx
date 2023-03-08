import React from 'react';

import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';

import { clearCart } from '../../redux/cartSlice/cartSlice';
import { IFormDelivery } from '../../interfaces/IFormDelivery';

import ErrorLabel from './errorLabel';
import { useAppDispatch } from '../../redux/store';

const DeliveryForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormDelivery>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<IFormDelivery> = data => {
    const deliveryData = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: {
        street: data.street,
        houseNumber: data.houseNumber,
        apartmentNumber: data.apartmentNumber,
        floor: data.floor,
      },
      comment: data.comment,
    };
    console.log(deliveryData);
    dispatch(clearCart());
    toast.success('Order sent for processing!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    reset();
  };

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__contacts contacts">
          <div className="form__title">Contacts:</div>
          <div className="contacts__body">
            <div className="contacts__wrapper">
              {errors.name?.message ? (
                <ErrorLabel error={errors.name?.message} />
              ) : (
                <label className="form__label">Name:</label>
              )}
              <input
                {...register('name', {
                  required: 'Name is required field',
                  minLength: {
                    value: 4,
                    message: 'Minimum name length 4 letters',
                  },
                })}
                className="contacts__input"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="contacts__wrapper">
              {errors.phone?.message ? (
                <ErrorLabel error={errors.phone?.message} />
              ) : (
                <label className="form__label">Phone:</label>
              )}
              <input
                {...register('phone', {
                  required: 'Phone number is required field',
                  minLength: {
                    value: 12,
                    message:
                      'The minimum length of a phone number is 12 numbers',
                  },
                  pattern: {
                    value: /^[1-9]\d{2}-\d{3}-\d{4}/,
                    message:
                      'Please enter valid phone number. Example 444-555-6666',
                  },
                })}
                className="contacts__input"
                placeholder="Phone"
                type="phone"
              />
            </div>
            <div className="contacts__wrapper">
              {errors.email?.message ? (
                <ErrorLabel error={errors.email?.message} />
              ) : (
                <label className="form__label">Email:</label>
              )}
              <input
                {...register('email', {
                  required: 'Email is required field',
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: 'Please enter valid email',
                  },
                })}
                className="contacts__input"
                placeholder="Email"
                type="email"
              />
            </div>
          </div>
        </div>
        <div className="form__addresses addresses">
          <div className="form__title">Addresses:</div>
          <div className="addresses__body">
            <div className="contacts__wrapper">
              {errors.street?.message ? (
                <ErrorLabel error={errors.street?.message} />
              ) : (
                <label className="form__label">Street:</label>
              )}
              <input
                {...register('street', {
                  required: 'Street is required field',
                })}
                className="contacts__input"
                placeholder="Street"
                type="text"
              />
            </div>
            <div className="contacts__wrapper">
              {errors.houseNumber?.message ? (
                <ErrorLabel error={errors.houseNumber?.message} />
              ) : (
                <label className="form__label">House number:</label>
              )}
              <input
                {...register('houseNumber', {
                  required: 'House number is required field',
                })}
                className="contacts__input"
                placeholder="House Number"
                type="number"
              />
            </div>
            <div className="contacts__wrapper">
              <label className="form__label">Apartment number:</label>
              <input
                {...register('apartmentNumber')}
                className="contacts__input"
                placeholder="Apartment number"
                type="number"
              />
            </div>
            <div className="contacts__wrapper">
              <label className="form__label">Floor:</label>
              <input
                {...register('floor')}
                className="contacts__input"
                placeholder="Floor"
                type="number"
              />
            </div>
            <div className="contacts__wrapper">
              <label className="form__label">Comment:</label>
              <textarea
                {...register('comment')}
                className="contacts__input"
                placeholder="Comment"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="form__btn">
          Go to Pay
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
