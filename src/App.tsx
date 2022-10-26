import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

interface Post extends PostProps {
  id: number;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://img.freepik.com/premium-vector/anime-boy-avatar_24640-79424.jpg',
      name: 'Henrique Lopes',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2022-10-13 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      {type: 'link', content: 'jane.design/doctorcare',},
    ],
    publishedAt: new Date('2022-10-23 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
  )
}