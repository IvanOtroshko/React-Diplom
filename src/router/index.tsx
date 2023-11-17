import { Route, Routes } from "react-router-dom";

import { Films } from "../pages/Films";
import { Main } from "../pages/Main";
import { Creator} from "../pages/StanLi";
import { Characters } from "../pages/Characters";


export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/films" element={<Films/>} />
      <Route path="/StanLee" element={<Creator/>}/>
      <Route path="/Characters" element={<Characters/>}/>
    </Routes>
  );
};