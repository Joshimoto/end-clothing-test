import styled from "styled-components";

export const FadeOnHover = styled.div`
  > * {
    opacity: 1;
    transtion: opacity 300ms ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;
