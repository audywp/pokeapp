import React from 'react';
import Header from '../../molecules/Header';

type HeaderType = {
  backable?: boolean;
  titleSize?: number;
  withLogo?: boolean;
  title?: string;
};

export default function HeaderOrganism({
  backable,
  titleSize,
  withLogo,
  title,
}: HeaderType) {
  return (
    <Header
      title={title}
      backable={backable}
      titleSize={titleSize}
      withLogo={withLogo}
    />
  );
}
