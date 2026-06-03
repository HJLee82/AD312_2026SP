import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'

function RecipeDetail() {
  const { id } = useParams()

  const recipe = recipes.find(r => r.id === Number(id))

  if (!recipe) {
    return (
      <div className="detail-container">
        <h2>Recipe not found!</h2>
        <Link to="/gallery" className="back-btn">← Back to Gallery</Link>
      </div>
    )
  }

  return (
    <div className="detail-container">
      <img src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Cooking Instructions</h3>
      <p>Cooking instructions coming soon...</p>
      <Link to="/gallery" className="back-btn">← Back to Gallery</Link>
    </div>
  )
}

export default RecipeDetail