import React from 'react';
import Loading from '../../molecules/Loading';

type LoadingType = {
  value: number;
};

const styles: Readonly<Record<any, string | number>> = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};

export default function LoadingOrganism({value}: LoadingType) {
  return <Loading value={value} style={styles} />;
}
