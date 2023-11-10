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
      password: '56ggW457hh#$',
      rulesAcceptance: 'Pole obowiązkowe!',
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
        {/* <input {...register('example')} />
        <input
          aria-invalid={errors.exampleRequired ? 'true' : 'false'}
          {...register('exampleRequired')}
        />
        {errors.exampleRequired && (
          <p role="alert">{errors.exampleRequired.message}</p>
        )} */}
        <div className="container">
          <div className="orderProduct">
            <h2>ZAMÓWIENIE PRODUKTU</h2>
            <h3>Wybierz produkt*</h3>
            <select {...register('course')}>
              <option value="kursFe">kurs front-end</option>
              <option value="other">other</option>
            </select>
            <div>
              <h3>Wybierz formę płatności*</h3>
              <div className="payment">
                <label>
                  <input
                    type="radio"
                    value="blik"
                    {...register('paymentMethod')}
                  />
                  blik
                </label>

                <label>
                  <input
                    type="radio"
                    value="przelew"
                    {...register('paymentMethod')}
                  />
                  przelew tradycyjny
                </label>

                <label>
                  <input
                    type="radio"
                    value="paypal"
                    {...register('paymentMethod')}
                  />
                  paypal
                </label>
              </div>
            </div>
            <h3>Opcje dodatkowe do zamówienia</h3>
            <div className="payment1">
              <input type="checkbox" {...register('agreements')} />
              <label>ustawienia środowiska</label>
              <input type="checkbox" {...register('agreements')} />
              <label>intro do GitHub</label>
              <input type="checkbox" {...register('agreements')} />
              <label>materiały dodatkowe</label>
            </div>
          </div>
          <div className="orderProduct">
            <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>
            <h3>Imię i nazwisko*</h3>
            <input {...register('example')} />
            <h3>Twój pseudonim*</h3>
            <input
              aria-invalid={errors.exampleRequired ? 'true' : 'false'}
              {...register('exampleRequired')}
            />
            <h3>Adres do wysyłki*</h3>
            <input {...register('address')} />
            <h3>Adres e-mail*</h3>
            <input {...register('email')} />
            <h3>Numer kontaktowy*</h3>
            <input {...register('phone')} />
            <h3>Dodatkowe uwagi do zamówienia*</h3>
            <input {...register('addInfo')} />
            {errors.mail && <p role="alert">{errors.mail.message}</p>}
          </div>
          <div className="orderProduct">
            <h2>ZAKŁADANIE KONTA</h2>
            <h3>Chcę założyć konto razem z zamówieniem</h3>
            <div className="payment">
              <input type="checkbox" {...register('agreements')} />
              zakładam konto
            </div>
            <h3>Moje hasło</h3>
            <input {...register('password')} />
            <h3>Powtórz hasło</h3>
            <input {...register('password')} />
          </div>
          <div className="orderProduct">
            <h2>ZGODY I NEWSLETTER</h2>
            <h3>Realizując zamówienie, akceptujesz regulamin naszego sklepu</h3>
            <div className="payment">
              <input type="checkbox" {...register('agreements')} />
              <label>akceptuję regulamin*</label>
            </div>
            <h3>
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </h3>
            <div className="payment">
              <input type="checkbox" {...register('agreements')} />
              <label>zapisuję się na listę mailingową</label>
            </div>
          </div>
          {/* <input type="submit" /> */}
          <button>Składam zamówienie</button>
        </div>
      </form>
    </div>
  );
};
