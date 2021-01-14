import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 30%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
