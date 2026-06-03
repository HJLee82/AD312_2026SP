import { useParams, useNavigate } from 'react-router-dom'
import { posts } from '../data/posts'

function PostView() {
  const { postId } = useParams()
  const navigate = useNavigate()

  const post = posts.find(p => p.id === Number(postId))

  if (!post) {
    return <h2>Post not found!</h2>
  }

  return (
    <div className="post-container">
      <h1>{post.title}</h1>
      <p className="post-meta">Post #{post.id}</p>
      <p>{post.content}</p>
      <button className="back-btn" onClick={() => navigate('/')}>← Return to Feed</button>
    </div>
  )
}

export default PostView