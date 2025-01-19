import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Posts from "./pages/posts/Posts";
import PostDetails from "./pages/posts/[id]/components/PostDetails";
import ContactForm from "./pages/contact/ContactForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
