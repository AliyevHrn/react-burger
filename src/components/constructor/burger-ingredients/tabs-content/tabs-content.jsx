import Styles from './tabs-content.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function ListItem(props) {
  return (
    <div className={Styles.item}>
      <div className={Styles.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <h3 className={`${Styles.price} text text_type_digits-default mt-1 mb-1`}>
        {props.price}
        <CurrencyIcon type="primary" />
      </h3>
      <h4 className={`${Styles.name} text text_type_main-default`}>{props.name}</h4>
    </div>
  )
}
ListItem.propTypes= {
  price: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string
}


function TabsContent(props) {
  const buns = props.data.filter(item => item.type === 'bun');
  const sauces = props.data.filter(item => item.type === 'sauce');
  const mains = props.data.filter(item => item.type === 'main');

  return (
    <div className="scrollsection mt-10">
      {buns.length &&
        <div className={Styles.section}>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <div className={Styles.list}>
            { buns.map((item, index) =>
              <ListItem {...item} key={index}/>
            )}
          </div>
        </div>
      }
      {sauces.length &&
        <div className={Styles.section}>
          <h2 className="mb-6 mt-10">Соусы</h2>
          <div className={Styles.list}>
            { sauces.map((item, index) =>
              <ListItem {...item} key={index}/>
            )}
          </div>
        </div>
      }
      {mains.length &&
        <div className={Styles.section}>
          <h2 className="mb-6 mt-10">Начинки</h2>
          <div className={Styles.list}>
            { mains.map((item, index) =>
              <ListItem {...item} key={index}/>
            )}
          </div>
        </div>
      }

    </div>
  )
}

export default TabsContent;
