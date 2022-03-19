import React from 'react';

import './PaymentMethods.css';

import american from '../../../../assets/american.png';
import cabalDebito from '../../../../assets/cabal-debito.png';
import mastercardDebito from '../../../../assets/mastercard-debito.png';
import mastercard from '../../../../assets/mastercard.png';
import mercadoCredito from '../../../../assets/mercado-credito.png';
import naranja from '../../../../assets/naranja.png';
import pagoFacil from '../../../../assets/pago-facil.png';
import rapiPago from '../../../../assets/rapi-pago.png';
import visaDebito from '../../../../assets/visa-debito.png';
import visa from '../../../../assets/visa.png';

const PaymentMethods = () => {
  return (
    <div className="product-detail-aside payments-methods">
      <h2>Medios de pago</h2>
      <div className="product-detail-aside__payments-methods">
        <div className="methods">
          <h3>Hasta 12 cuotas sin tarjeta</h3>
          <div className="methods__image">
            <img src={mercadoCredito} alt="mercado credito" />
          </div>
        </div>

        <div className="methods">
          <h3>Tarjetas de crédito</h3>
          <p>¡Cuotas sin interés con bancos seleccionados!</p>
          <div className="methods__image">
            <img src={american} alt="mercado credito" />
            <img src={mastercard} alt="mercado credito" />
            <img src={visa} alt="mercado credito" />
            <img src={naranja} alt="mercado credito" />
          </div>
        </div>

        <div className="methods">
          <h3>Tarjetas de débito</h3>
          <div className="methods__image">
            <img src={visaDebito} alt="mercado credito" />
            <img src={mastercardDebito} alt="mercado credito" />
            <img src={cabalDebito} alt="mercado credito" />
          </div>
        </div>

        <div className="methods">
          <h3>Efectivo</h3>
          <div className="methods__image">
            <img src={pagoFacil} alt="mercado credito" />
            <img src={rapiPago} alt="mercado credito" />
          </div>
        </div>
      </div>
      <p>Conocé otros medios de pago</p>
    </div>
  );
};

export default PaymentMethods;
