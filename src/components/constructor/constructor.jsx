import './constructor.css';

function Constructor(props) {
  return (
    <>
      <h1 className='text text_type_main-large mb-5'>Соберите бургер</h1>
      <div className='wrapper'>
        {props.children}
      </div>
    </>
  );
}
export default Constructor;
