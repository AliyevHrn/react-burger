import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import ConstructorItem from '../constructor-item/constructor-item';
import TotalPrice from '../total-price/total-price';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import Styles from './burger-constructor.module.css';


function BurgerConstructor(props) {

  const data = props.data.filter((item) => item.type !== 'bun');

  return (
    <div className={Styles.constructor}>
      <div className="constructor-items pl-4">
        <div className="mb-4 pl-8">
          <ConstructorElement
          type={'top'}
          text={'Краторная булка N-200i (верх)'}
          price={20}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
          isLocked={true}
          />
        </div>
        <div className={Styles.scrollsection}>
          {data.map((item, index) =>
            <ConstructorItem {...item} key={index}/>
          )}
        </div>
        <div className="mt-4 pl-8">
          <ConstructorElement
          type={'bottom'}
          text={'Краторная булка N-200i (низ)'}
          price={20}
          thumbnail={'https://code.s3.yandex.net/react/code/bun-02-mobile.png'}
          isLocked={true}
          />
        </div>
      </div>
      <div className={`${Styles.totalBlock} mt-10 mb-10 pr-10`}>
        <TotalPrice totalPrice={6545}/>
        <Button type="primary" size="large" onClick={() => props.handleOpenModal('order')}>
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired
};

export default BurgerConstructor;
