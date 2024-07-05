import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import FrameComponent1 from './components/FrameComponent1';
import Component from './components/Component';
import HomePage from './components/HomePage';
import FrameComponent from './components/FrameComponent';
import Institutes from './pages/Institutes.js';
import AddYourUni from './pages/AddYourUni.js';
import UniversityPage from './pages/UniversityPage.js';
import CoursePreviewPage from './pages/CoursePreviewPage.js';
import SavebuttonComp from './PreviewPageComponents/SavebuttonComp.js';
import SignUpPage from './pages/SignUpPage.js';
import StudyListPage from './pages/StudyListPage.js';
import MyBooksPage from './pages/MyBooksPage.js';
import BookPreviewPage from './pages/BookPreviewPage.js';
import DownloadsPage from './pages/DownloadsPage.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/frame-component-1" element={<FrameComponent1 />} />
        <Route path="/component" element={<Component />} />
        <Route path="/frame-component" element={<FrameComponent />} />
        {/* <Route path="/UniversityPage" element = {<UniversityPage />} /> */}
        <Route path="/university/:name" element={<UniversityPage />} />
        <Route path='/CoursePreviewPage' element={<CoursePreviewPage />}></Route>
        <Route path="/SavebuttonComp" element={<SavebuttonComp />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/StudyListPage" element={<StudyListPage />} />
        <Route path="/MyBooksPage" element={<MyBooksPage />} />
        <Route path="/BookPreviewPage" element={<BookPreviewPage />} />
        <Route path="/DownloadsPage" element={<DownloadsPage />} />


        <Route path="/institutes" element={<Institutes />} />
        <Route path="/AddYourUni" element={<AddYourUni />} />
      </Routes>
    </Router>
  );
}

export default App;
