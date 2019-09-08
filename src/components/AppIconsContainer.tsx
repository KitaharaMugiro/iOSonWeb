import React from "react";
import styled from "styled-components";
import { AppIcon } from "./AppIcon";

export function AppIconsContainer() {
  const Container = styled.div`
    display: flex;
    justify-content: space-around;
  `;
  return (
    <Container>
      <AppIcon img="https://www.danshihack.com/wp-content/uploads/2013/06/ios7_8.jpg" />
      <AppIcon img="https://i1.wp.com/25reinyan25.net/wp-content/uploads/2014/06/WWDC.png?fit=512%2C512&ssl=1" />
      <AppIcon img="https://www.danshihack.com/wp-content/uploads/2013/06/ios7_8.jpg" />
    </Container>
  );
}
