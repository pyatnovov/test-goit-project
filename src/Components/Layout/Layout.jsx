import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import { Header, Container } from "./Layout.styled";
export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Container>
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
