import React, { useRef } from "react";
import Styles from "./constructor-item.module.css";
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { DELETE_INGREDIENT } from "../../../services/actions/ingredients";

function ConstructorItem({_id, index, name, price, image_mobile, moveIngredient}) {


  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch({
      type: DELETE_INGREDIENT,
      payload: index
    });
  };

  // const ref = useRef(null)

  // const [{ handlerId }, drop] = useDrop({
  //   accept: 'constructor',
  //   collect(monitor) {
  //     return {
  //       handlerId: monitor.getHandlerId(),
  //     }
  //   },
  //   hover(item, monitor) {
  //     if (!ref.current) {
  //       return
  //     }
  //     const dragIndex = item.index
  //     const hoverIndex = index
  //     if (dragIndex === hoverIndex) {
  //       return
  //     }
  //     const hoverBoundingRect = ref.current?.getBoundingClientRect()
  //     const hoverMiddleY =
  //       (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
  //     const clientOffset = monitor.getClientOffset()
  //     const hoverClientY = clientOffset.y - hoverBoundingRect.top
  //     if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
  //       return
  //     }
  //     if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
  //       return
  //     }
  //     moveIngredient(dragIndex, hoverIndex)
  //     item.index = hoverIndex
  //   },
  // })
  // const [, drag] = useDrag({
  //   type: 'constructor',
  //   item: () => {
  //     return { id, index }
  //   },
  // })

  // drag(drop(ref))


  return (
    <div className={Styles.item} index={index}>
      <div className={`${Styles.dragIcon} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={name}
        price={price}
        thumbnail={image_mobile}
        handleClose={onDelete}
      />
    </div>
  )
}

ConstructorItem.propTypes= {
  index: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image_mobile: PropTypes.string.isRequired
}

export default ConstructorItem;
