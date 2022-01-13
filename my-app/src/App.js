import logo from './logo.svg';
import './App.css';

function PostItem() {
  return (
       <div className="post-item">
         <img src ="https://cdn.fullstack.edu.vn/f8-production/blog_posts/1637/61b175b3debf2.jpg" alt="" />
         <h2 className="post-title">Tailwind css và cách cài đặt cơ bản </h2>
         <p className="post-desc">Bạn đang lo lắng vì đặt tên class</p>
         <p className="post-published">một tháng trước</p>
     </div>
  )
}

export default App;
