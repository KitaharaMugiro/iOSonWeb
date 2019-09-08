import React from "react";
import styled from "styled-components";

interface AppIconProps {
  img: string;
}

export function AppIcon(props: AppIconProps) {
  const Container = styled.div`
  display:flex;
  width: 210px
  height: 210px
  `;
  return (
    <Container>
      <img src={props.img} />
    </Container>
  );
}
