import doneimg from '../../../images/done.svg';

function OrderDetails (props) {
  return (
    <div className='mt-20 mb-15'>
      <h2 className="text text_type_digits-large mb-8">034536</h2>
      <p className='text text_type_main-medium mt-8 mb-15'>идентификатор заказа</p>
      <img src={doneimg} alt="Готово" className='mb-15' />
      <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}
export default OrderDetails;
