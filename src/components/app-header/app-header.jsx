import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import './app-header.css';

function NavItem(props) {
  const className = `${props.active ? 'nav-btn_current' : ''}`;

  return (
    <div className={`${className} nav-btn pt-4 pr-5 pb-4 pl-5`} onClick={props.handleClick}
    >
      <div className='mr-2'>
        {props.icon}
      </div>
      <span className="text text_type_main-default">{props.name}</span>
    </div>
  )
}
NavItem.propTypes = {
  props: PropTypes.func,
  icon: PropTypes.object
}

function AppLogo() {
  return (
    <div className="logo">
      <Logo/>
    </div>
  )
}

function AppHeader() {
  const [current, setCurrent] = React.useState('constructor');

  return (
    <header className="pt-4 pb-4">
      <nav className="nav">
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
