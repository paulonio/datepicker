import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
  }
`;

export default Global;
