import React from 'react';
import DetailTemplate from '../../templates/Detail';

export default function Detail({route}: Record<string, any>) {
  const data = route.params.payload;
  return <DetailTemplate data={data} />;
}
