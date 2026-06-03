import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

function Home() {
  return (
    <div className="home-container">
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <Link to={`/post/${post.id}`}>{post.title}</Link>
          <p className="post-meta">Post #{post.id} · Click to read</p>
        </div>
      ))}
    </div>
  )
}

export default Home