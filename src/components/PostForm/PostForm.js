import React, {useState} from 'react'

export default function PostForm({onSave}) {
  const [post, setPost] = useState({
    id: Date.now(),
    author: {
      avatar: 'https://alif-skills.pro/media/logo_alif.svg',
      name: 'Alif Skills',
    },
    content: '',
    photo: null,
    hit: false,
    likes: 0,
    likedByMe: false,
    hidden: false,
    tags: [],
    created: Date.now(),
});

 const handleSubmit  = (ev)  => {
  ev.preventDefault();
  onSave(post);
  };

  const handleChange = (ev) => {
    const {value, name} = ev.target;
    if (name === 'tags'){
      const parsed = value.replaceAll('#', '').split(' ').filter(el => el.trim() !== '');
      const tagsArr = parsed.length === 0 ? null : parsed;
      setPost((prevState) => ({ ...prevState, [name]: tagsArr }));
      return;
    }
    setPost((prevState) => ({...prevState, [name]: value}));
  };


  return (
    <form onSubmit={handleSubmit}>
        <textarea name="content" value={post.content} onChange={handleChange}></textarea>
        <input name="tags" value={post.tags?.join(' ')} onChange={handleChange} />
        <button>Ok</button>
    </form>
  )
};
