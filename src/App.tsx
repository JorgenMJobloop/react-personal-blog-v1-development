import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import BlogPosts from './components/BlogPosts/BlogPosts'
function App() {

  return (
    <>
      <div className='App'>
      <Navbar/>
      <main>
        <BlogPosts/>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App
