import Head from 'next/head'
import Image from 'next/image'
import Chatbot from './components/Chatbot'
import Header from './components/Header'
import HeadMeta from './components/HeadMeta'


export default function Home() {
  return (
    <div>
      <HeadMeta></HeadMeta>
      <Header></Header>
      <Chatbot></Chatbot>
      
      
    </div>
  )
}
