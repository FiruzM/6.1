import React, {useState} from 'react'
import Post from '../Post/Post';
import PostForm from '../PostForm/PostForm';

function Wall(props) {
    const [posts, setPosts] = useState([
        {
            id: 2,
            author: {
                id: 1,
                avatar: 'https://alif-skills.pro/media/logo_alif.svg',
                name: 'Alif Skills',
            },
            content: 'Ну как, вы справились с домашкой?',
            photo: null,
            hit: true,
            likes: 222,
            likedByMe: true,
            hidden: true,
            tags: ['deadline', 'homework'],
            created: 1603774800,
        },
        {
            id: 1,
            author: {
                id: 1,
                avatar: 'https://alif-skills.pro/media/logo_alif.svg',
                name: 'Alif Skills',
            },
            content: null,
            photo: {
                url: 'https://alif-skills.pro/media/meme.jpg',
                alt: 'Мем про дедлайн',
            },
            hit: true,
            likes: 10,
            likedByMe: true,
            hidden: false,
            created: 1603501200,
        },
    ]);

    const handlePostLike = (id) => {
        setPosts((prevState) => prevState.map(o => {
            if (o.id !== id) {
                return o;
            }

            const likedByMe = !o.likedByMe;
            const likes = likedByMe ? o.likes + 1 : o.likes - 1;
            return {...o, likedByMe, likes}
        }))
    }

    const handlePostRemove = (id) => {
        setPosts((prevState) => prevState.filter(o => o.id !== id))
    }

    const handlePostHideAndShow = (id) => {
        setPosts((prevState) => prevState.map (o => {
            if (o.id !== id) {
                return o;
            }
            const hidden = !o.hidden;
            return {...o, hidden}
        }))
    }

    const handlePostSave = (post) => {
        setPosts((prevState) => [{...post}, ...prevState])
    };

  return (
    <>
        <PostForm onSave={handlePostSave} />
        <div>
            {posts.map(o => <Post 
                                key={o.id} 
                                post={o} 
                                onLike={handlePostLike} 
                                onRemove={handlePostRemove} 
                                onHide={handlePostHideAndShow} 
                                onShow={handlePostHideAndShow} />)}
        </div>
    </>
  );
}

export default Wall;