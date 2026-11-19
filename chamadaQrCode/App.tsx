import "./src/styles/global.css";
import "./src/shared/colors";
import { Login } from "./src/screens/Login";

import { NavigationRoutes } from "./src/routes";
import { FontLoader } from "./src/shared/FontLoader";

export default function App() {
  return (
    <FontLoader>
      <NavigationRoutes />
    </FontLoader>
  );
}
