//  CourseItem
const courses = [
     {
       "id": 13,
       "title": "Xây Dựng Website với ReactJS",
       "slug": "reactjs",
       "description": "Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi nắm chắc các kiến thức được chia sẻ trong khóa học này.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/13/13.png",
       "user_progress": 30,
       "video_type": "youtube",
       "video": "x0fSBAgBrOQ",
       "students_count": 15094,
       "last_completed_at": "2022-01-14 23:28:17",
       "is_registered": true
     },
     {
       "id": 3,
       "title": "Responsive Với Grid System",
       "slug": "responsive-web-design",
       "description": "Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/3.png",
       "user_progress": 5,
       "video_type": "youtube",
       "video": "uz5LIP85J5Y",
       "students_count": 18170,
       "last_completed_at": "2022-01-11 14:45:24",
       "is_registered": true
     },
     {
       "id": 2,
       "title": "HTML, CSS từ Zero đến Hero",
       "slug": "html-css",
       "description": "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/2.png",
       "user_progress": 62,
       "video_type": "youtube",
       "video": "R6plN3FvzFY",
       "students_count": 114204,
       "last_completed_at": "2022-01-10 18:32:20",
       "is_registered": true
     },
     {
       "id": 4,
       "title": "App \"Đừng Chạm Tay Lên Mặt\"",
       "slug": "tool-canh-bao-so-len-mat",
       "description": "Xây dựng ứng dụng đưa ra cảnh báo khi người dùng sờ tay lên mặt. Chúng ta sẽ sử dụng thư viện ReactJS & Tensoflow để hoàn thiện ứng dụng này.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/4/61a9e9e701506.png",
       "user_progress": 15,
       "video_type": "youtube",
       "video": "r6GWbQL-qwA",
       "students_count": 4249,
       "last_completed_at": "2021-12-01 15:57:36",
       "is_registered": true
     },
     {
       "id": 12,
       "title": "JavaScript Nâng Cao",
       "slug": "javascript-nang-cao",
       "description": "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/12.png",
       "user_progress": 87,
       "video_type": "youtube",
       "video": "MGhw6XliFgo",
       "students_count": 10520,
       "last_completed_at": "2021-11-24 23:28:51",
       "is_registered": true
     },
     {
       "id": 6,
       "title": "Node & ExpressJS",
       "slug": "nodejs",
       "description": "Học Back-end với Node & ExpressJS framework, hiểu các khái niệm khi làm Back-end và xây dựng RESTful API cho trang web.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/6.png",
       "user_progress": 5,
       "video_type": "youtube",
       "video": "z2f7RHgvddc",
       "students_count": 15936,
       "last_completed_at": "2021-11-23 23:42:59",
       "is_registered": true
     },
     {
       "id": 5,
       "title": "HTML, CSS Tips & Tricks",
       "slug": "html-css-tutorials",
       "description": "Tutorials về HTML, CSS, UI, UX sẽ được tổng hợp tại khóa học này, các video có nội dung ngắn gọn, súc tích giúp học viên có thể ứng dụng ngay vào thực tế",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/5.png",
       "user_progress": 28,
       "video_type": "youtube",
       "video": "nB6cJh_bb1U",
       "students_count": 11987,
       "last_completed_at": "2021-11-18 15:36:16",
       "is_registered": true
     },
     {
       "id": 1,
       "title": "JavaScript Cơ Bản",
       "slug": "javascript-co-ban",
       "description": "Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/1.png",
       "user_progress": 93,
       "video_type": "youtube",
       "video": "0SJE9dYdpps",
       "students_count": 67728,
       "last_completed_at": "2021-11-13 22:35:37",
       "is_registered": true
     },
     {
       "id": 7,
       "title": "Kiến Thức Nhập Môn IT",
       "slug": "lessons-for-newbie",
       "description": "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/7.png",
       "user_progress": 11,
       "video_type": "youtube",
       "video": "M62l1xA5Eu8",
       "students_count": 49218,
       "last_completed_at": "2021-09-26 14:41:48",
       "is_registered": true
     },
     {
       "id": 14,
       "title": "Làm việc với Terminal & Ubuntu",
       "slug": "windows-terminal-wsl",
       "description": "Sở hữu một Terminal hiện đại, mạnh mẽ trong tùy biến và học cách làm việc với Ubuntu là một bước quan trọng trên con đường trở thành một Web Developer.",
       "image_url": "https://cdn.fullstack.edu.vn/f8-production/courses/14/61a89fb15f2fb.png",
       "user_progress": 0,
       "video_type": "youtube",
       "video": "7ppRSaGT1uw",
       "students_count": 1011,
       "last_completed_at": null,
       "is_registered": true
     }
   ]
function Course({
     image,
     title,
     description,
     studentsCount, }) {
     return (
          <div>
               <img src={image}
                    alt={title} />
               <h2>{title}</h2>
               <p>{description}</p>
               <p>{studentsCount}</p>
          </div>
     )
}

function App() {
     return (
          <div id="wrapper">
               {courses.map(course =>
                    <Course
                         key={course.id}
                         image={course.image_url}
                         title={course.title}
                         description={course.description}
                         studentsCount={course.students_count}
                    />

               )}
          </div>

     )
}
ReactDOM.render(<App />, document.getElementById('root'))

