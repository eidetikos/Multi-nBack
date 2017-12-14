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

export const PostGameStyled = styled.div`
  color: '#770D00';
  position: relative;
  display: flex:
  flexDirection: column;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ChartStyled = styled.div`
  /* position: absolute; */
  width: 70%;
  height: 70%;
  /* padding-top: 20px;
  left: 2px;
  bottom: 2px; */
`;

// export const StatsStyled = styled.div`
// position: absolute;
// /* align-items: right; */
// padding-left: 50px;
// `;

export const ChartStats = styled.div`
  display: flex:
  flexDirection: column;
  justify-content: center;
`;

