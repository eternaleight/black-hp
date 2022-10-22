import styled from "styled-components"

export const Item = styled.div`
  margin-top: 40px;
  width: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  word-break: break-word;

  @media (max-width: 760px) {
    font-size: 12px;
  }
`

export const Icon = styled.div`
  margin-right: 10px;
  display: flex;

  svg {
    width: 30px;
    height: 30px;
  }
`

export const Text = styled.div`
  color: white;
  text-align: start;
  transform: translateY(0.5px);
`

export const UnderWhite = styled.a`
  color: white;
  padding: 4px 8px;
  margin: 0px -8px 0px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
