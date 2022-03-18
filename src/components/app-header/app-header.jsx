import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import Styles from './app-header.module.css';

function NavItem(props) {
  const className = `${props.active ? Styles.nav__btn_current : ''}`;

  return (
    <div className={`${className} ${Styles.nav__btn} pt-4 pr-5 pb-4 pl-5`} onClick={props.handleClick}
    >
      <div className='mr-2'>
        {props.icon}
      </div>
      <span className="text text_type_main-default">{props.name}</span>
    </div>
  )
}
NavItem.propTypes = {
  handleClick: PropTypes.func,
  icon: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
}

function AppLogo() {
  return (
    <div className={Styles.logo}>
      <Logo/>
    </div>
  )
}

function AppHeader() {
  const [current, setCurrent] = React.useState('constructor');

  return (
    <header className="pt-4 pb-4">
      <nav className={Styles.nav}>
        <AppLogo />
        <NavItem
          name='Конструктор'
          icon={<BurgerIcon/>}
          active={current === 'constructor'}
          handleClick={() => setCurrent('constructor')} />
        <NavItem
          name='Лента заказов'
          icon={<ListIcon/>}
          active={current === 'orders'}
          handleClick={() => setCurrent('orders')} />
        <NavItem
          name='Личный кабинет'
          icon={<ProfileIcon/>}
          active={current === 'personal'}
          handleClick={() => setCurrent('personal')} />
      </nav>
    </header>
  )
}
export default AppHeader;
