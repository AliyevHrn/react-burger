import TabsList from './tabs-list/tabs-list';
import TabsContent from './tabs-content/tabs-content';

function BurgerIngredients(props) {
  return (
    <div className="ingredients">
      <TabsList />
      <TabsContent data={props.data} />
    </div>
  )
}


export default BurgerIngredients;
