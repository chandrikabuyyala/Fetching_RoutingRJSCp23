import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    Render UserInfo and BlogList
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
