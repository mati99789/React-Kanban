import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 1rem auto;
  background-color: #9c9797;
  color: #fff;
  flex: 1 2 auto;
  text-align: center;
  justify-content: center;
  width: 50%;
  padding: 0.5rem;

  & input[type='text'] {
    display: block;
    margin: 0 auto;
    padding: 0.5rem;
    width: 50%;
  }

  & input[type='submit'] {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 10px;
    width: 20%;
  }
`;
