import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toggleArrow from '../../../Images/toggle-arrow.svg';

import './styles.css';

const schema = yup
  .object({
    example: yup.string().required('Pole example jest wymagane!'),
    exampleRequired: yup
      .string()
      .required('Pole exampleRequired jest wymagane!'),
    mail: yup
      .string()
      .email('Pole nie jest emailem')
      .required('Pole mail jest wymagane!'),
    agreements: yup.boolean().oneOf([true], 'Pole agreements jest wymagane!'),
  })
  .required();

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: 'wpisz swoje imię i nazwisko',
      exampleRequired: 'Wojtek',
      address: 'adres, na który mamy wysłać zamówienie',
      email: 'jan.kowalski@gmail.com',
      phone: '+48 888 888 888',
      addInfo: 'Jeśli masz jakieś uwagi, wpisz je tutaj',
      course: 'other',
      mail: '',
      paymentMethod: '',
      agreements: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(errors, 'errors');
  });

  return (
    <div>
      <div>
        <h2>
          <img
            src={toggleArrow}
            className="faqimg"
            alt="Tu powinien być obrazek"
          />
          FORMULARZ ZAMÓWIENIA
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('example')} />

        <input
          aria-invalid={errors.exampleRequired ? 'true' : 'false'}
          {...register('exampleRequired')}
        />
        {errors.exampleRequired && (
          <p role="alert">{errors.exampleRequired.message}</p>
        )}
        <h2>ZAMÓWIENIE PRODUKTU</h2>
        <h3>Wybierz produkt*</h3>
        <select {...register('course')}>
          <option value="kursFe">kurs front-end</option>
          <option value="other">other</option>
        </select>

        <div>
          <h3>Wybierz formę płatności*</h3>
          <div>
            <input type="radio" value="blik" {...register('paymentMethod')} />
            blik
          </div>
          <div>
            <input
              type="radio"
              value="przelew"
              {...register('paymentMethod')}
            />
            przelew tradycyjny
          </div>
          <div>
            <input type="radio" value="paypal" {...register('paymentMethod')} />
            paypal
          </div>
        </div>

        <div>
          <h3>Opcje dodatkowe do zamówienia</h3>
          <input type="checkbox" {...register('agreements')} />
          ustawienia środowiska
          <input type="checkbox" {...register('agreements')} />
          intro do GitHub
          <input type="checkbox" {...register('agreements')} />
          materiały dodatkowe
        </div>
        {errors.agreements && <p role="alert">{errors.agreements.message}</p>}
        <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>
        <h3>Imię i nazwisko*</h3>
        <input {...register('example')} />
        <h3>Twój pseudonim*</h3>
        <input {...register('exampleRequired')} />
        <h3>Adres do wysyłki*</h3>
        <input {...register('address')} />
        <h3>Adres e-mail*</h3>
        <input {...register('email')} />
        <h3>Numer kontaktowy*</h3>
        <input {...register('phone')} />
        <h3>Dodatkowe uwagi do zamówienia*</h3>
        <input {...register('addInfo')} />
        <input
          aria-invalid={errors.mail ? 'true' : 'false'}
          {...register('mail')}
        />
        {errors.mail && <p role="alert">{errors.mail.message}</p>}

        {/* <input type="submit" /> */}
        <button>Składam</button>
      </form>
    </div>
  );
};
