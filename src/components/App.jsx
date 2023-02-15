import { RecipeList } from "./RecipeList";
import recipes from '../recipes.json'

export const App = () => {
  return <div>
   <RecipeList items={recipes} />
    </div>
        }
   
// return (
//   <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101'
//     }}
//   >
//     React homework template
//   </div>
// );
// };
