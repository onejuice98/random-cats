import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cat from "./Cats";
import Breeds from "./Breeds";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Cat />} />
                <Route path="/:breedId/*" element={<Breeds />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;