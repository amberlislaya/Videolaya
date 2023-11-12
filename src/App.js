
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Footer from './components/Footer';
import Header from "./components/Header";
import Feed from "./components/Feed";
import React from "react";




const App = () => {

return (
	
<AppContext>
<BrowserRouter>
<div className="flex flex-col h-full">
   <Header />
<Routes>
<Route path="/" exact element={<Feed />} />
<Route path="/searchResult/:searchQuery" element={<SearchResult />}/>
<Route path="/video/:id" element={<VideoDetails />} />
</Routes>
</div>
<Footer/>
</BrowserRouter>
</AppContext>
);
};

export default App;

