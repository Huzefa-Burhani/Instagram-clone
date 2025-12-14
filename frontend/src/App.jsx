import {BrowserRouter ,Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import FeedPage from "./pages/FeedPage"
import PostDetailsPage from "./pages/PostDetailsPage"
import CreatePostPage from "./pages/CreatePostPage"
import ProfilePage from "./pages/ProfilePage"

function App() {

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<FeedPage/>}/>
       <Route path="/loginpage" element={<LoginPage/>}/>
       <Route path="/signuppage" element={<SignUpPage/>}/>
       <Route path="/profile/:id" element={<ProfilePage/>}/>
       <Route path="/createpost" element={<CreatePostPage/>}/>
       <Route path="/post/:id" element={<PostDetailsPage/>}/>
     </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
