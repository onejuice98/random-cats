import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cat from "./Cats";
import Breeds from "./Breeds";
import Breed from "./Breed";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cat />} />
                <Route path="/breeds" element={<Breeds />} />
                <Route path="/breeds/:breedId" element={<Breed />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;