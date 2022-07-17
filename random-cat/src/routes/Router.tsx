import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cat from "./Cats";
import Breed from "./Breed";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cat />} />
                <Route path="/:breedId/*" element={<Breed />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;