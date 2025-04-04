import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {

  return (
    <div>
      <Header />

      <Post
      autor="Yruam Käffer de Faria"
      content="Lorem ipsulum"
      />
      
      <Post 
      autor="Yruam Käffer de Faria"
      content="Lorem ipsulum"
      />
    </div>
  );
}