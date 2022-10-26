import React from 'react';
import Container from '../../atoms/Container';
import Loading from '../../organisms/Loading';

type LoadingType = {
  value: number;
};

export default function LoadingComponent({value}: LoadingType) {
  return (
    <Container>
      <Loading value={value} />
    </Container>
  );
}
