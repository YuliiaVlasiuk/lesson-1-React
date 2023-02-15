import {Recipe} from './Recipe'
import PropTypes from 'prop-types'

export const RecipeList = ({ items }) => {
  return (
    <ul style={{display:'flex', gap:16} }>
      {items.map(item => (
        <li key={item.id}> 
        <Recipe item={item}/>
        </li>
      ))}
    </ul>
  );
};

RecipeList.propTypes={
items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired
}
