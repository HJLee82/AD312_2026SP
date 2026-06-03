import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'

function Gallery() {
  return (
    <div className="gallery-container">
      <h1>Recipe Gallery</h1>
      <div className="gallery">
        {recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="card">
            <img src={recipe.image} alt={recipe.title} />
            <h2>{recipe.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Gallery