import React, { useRef } from "react";
import Styles from "./constructor-item.module.css";
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { changeIngredientPosition, deleteIngredient } from "../../../../services/actions/ingredients";
import { ingredientType } from '../../../../utils/types';

function ConstructorItem({_id, index, name, price, image_mobile}) {

  const { constructorItems } = useSelector(store => ({
    constructorItems: store.ingredients.constructorItems
  }));

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteIngredient(index));
  };

  const onMoveItem = (dragIndex, hoverIndex) => {

    const dragElement = constructorItems.splice(dragIndex, 1);
    constructorItems.splice(hoverIndex, 0, dragElement[0]);

    dispatch(changeIngredientPosition(constructorItems));

  }

  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: 'constructor',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      onMoveItem(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  const [, drag] = useDrag({
    type: 'constructor',
    item: () => {
      return { _id, index }
    },
  })

  drag(drop(ref))


  return (
    <div className={Styles.item} index={index} ref={ref}>
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


ConstructorItem.propTypes = ingredientType;

export default ConstructorItem;
