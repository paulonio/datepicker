import React from 'react';

import { Message, Wrapper } from './styled';

const Fallback = () => {
  return (
    <Wrapper>
      <Message>Something went wrong. Please reload the page.</Message>
    </Wrapper>
  );
};

export default Fallback;
