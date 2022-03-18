import Styles from './tabs-content.module.css';
import PropTypes from 'prop-types';
import IngredientsItem from '../ingredients-item/ingredients-item';


function Section(props) {
  return (
    <div>
      <h2 className="text text_type_main-medium mb-6">{props.title}</h2>
      <div className={Styles.list}>
        {props.children}
      </div>
    </div>
  )
}
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired
}

function TabsContent(props) {
  const buns = props.data.filter(item => item.type === 'bun');
  const sauces = props.data.filter(item => item.type === 'sauce');
  const mains = props.data.filter(item => item.type === 'main');

  return (
    <div className={`${Styles.scrollsection} mt-10`}>
      {buns.length &&
        <Section title={'Булки'}>
          { buns.map((item, index) =>
            <IngredientsItem {...item} key={index} handleOpenModal={() => props.handleOpenModal('ingredients', item)}/>
          )}
        </Section>
      }
      {sauces.length &&
        <Section title={'Соусы'}>
        { sauces.map((item, index) =>
          <IngredientsItem {...item} key={index} handleOpenModal={() => props.handleOpenModal('ingredients', item)}/>
        )}
      </Section>
      }
      {mains.length &&
        <Section title={'Начинки'}>
        { mains.map((item, index) =>
          <IngredientsItem {...item} key={index} handleOpenModal={() => props.handleOpenModal('ingredients', item)}/>
        )}
        </Section>
      }

    </div>
  )
}
TabsContent.propTypes = {
  handleOpenModal: PropTypes.func,
  data: PropTypes.array.isRequired
}

export default TabsContent;
