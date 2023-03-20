import React from 'react';
import Tags from '../Tags/Tags';
import './Post.css';

function Post({post, onLike, onRemove, onHide, onShow}) {
  const {author} = post;
  const {photo} = post;


  const handleClick = (evt) => {
    onLike(post.id);
  }

  const handleRemove = (evt) => {
    onRemove(post.id);
  }

  const handleHide = (evt) => {
    onHide(post.id);
  }

  const handleShow =(evt) => {
    onShow(post.id);
  }

  if(post.hidden){
    return (
      <article>
        <header>
          <img className='Post-avatar' src={author.avatar} width = "50" height="50" alt={author.name}/>
          <h5>{author.name}</h5>
          <button onClick={handleShow}>показать</button>
          <div>{post.created}</div>
          {post.hit && <span>HIT</span>}
        </header>
      </article>
    );
  }
  
  return (
    <article>
      <header>
        <img className='Post-avatar' src={author.avatar} width = "50" height="50" alt={author.name}/>
        <h5>{author.name}</h5>
        <button onClick={handleRemove}>удалить</button>
        <button onClick={handleHide}>скрыть</button>
        <div>{post.created}</div>
        {post.hit && <span>HIT</span>}
      </header>

      <div>
        <div className='Post-content'>{post.content}</div>
        {photo && <img className='Post-photo' src={photo.url} alt={photo.alt}/>}
      </div>

    <footer>
      <span className='Post-likes' onClick={handleClick}>
        <img 
        src={post.likedByMe ? 'https://alif-skills.pro/media/liked.svg' : 'https://alif-skills.pro/media/unliked.svg'} 
        alt="likes" 
        width="20" 
        height="20" 
        />
        <span className='Post-likes-count'>{post.likes}</span> {post.tags && <Tags tags={post.tags} />}
      </span>
    </footer>
    </article>
  )
}

export default Post