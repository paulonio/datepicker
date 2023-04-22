import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
    font-family: 'Open Sans', sans-serif;
  }
`;

export default Global;
