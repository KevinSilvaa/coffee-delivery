// Styling Imports
import { LayoutContainer } from "./styles";

// Components Imports
import { Header } from "../../components/Header";

// Strategic Imports
import { Outlet } from "react-router-dom";

export function DefaultLayout() {

  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}
