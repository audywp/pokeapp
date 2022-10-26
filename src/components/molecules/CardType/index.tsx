import React from 'react';
import Card from '../../atoms/Card';
import Poppins from '../../atoms/Text';
import {styles} from './style';

type CardTypes = {
  color?: string;
  title?: any;
};

export default function CardType({color, title}: CardTypes) {
  return (
    <Card bgColor={color} style={styles.container}>
      <Poppins type="SemiBold" style={styles.textStyles}>
        {title}
      </Poppins>
    </Card>
  );
}
