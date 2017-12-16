import styled from 'styled-components';


export const ModalDiv = styled.div`{
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
`;

export const ErrorDiv = styled.div`
  color: red;
  font-family: monospace;
  padding: 20px;
`;

export const LoadingStyled = styled.div`
  color: rgb(122, 0, 128);
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: App-logo-spin infinite 1s linear;
`;