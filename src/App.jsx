import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Henrique Lopes" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos officiis praesentium sunt impedit sapiente voluptatem repellendus doloremque iusto deleniti, ipsa, aspernatur quaerat tempora aliquam mollitia corrupti perferendis aut. Consectetur, incidunt"
          />
          <Post 
            author="Gabriel"
            content="Um novo post muito legal!"
          />
        </main>

      </div>
    </div>
  )
}