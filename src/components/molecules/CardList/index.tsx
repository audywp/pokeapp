import {View} from 'react-native';
import React from 'react';
import Card from '../../atoms/Card';
import Poppins from '../../atoms/Text';
import {styles} from './style';
import Image from '../../atoms/Image';
import {moderateScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLOR} from '../../../config/color';
import {navigate} from '../../../helpers/navigation';

type ItemType = {
  item: Record<string, any>;
};

export default function CardList({item}: ItemType) {
  return (
    <>
      <TouchableOpacity onPress={() => navigate('Detail', {payload: item})}>
        <Card
          bgColor={COLOR[item.types[0].type.name] + 'CC'}
          style={styles.heightCard}>
          <Poppins style={styles.capitalize} type="Medium">
            {item.name}
          </Poppins>
        </Card>
      </TouchableOpacity>

      <Card style={styles.heightCard} bgColor="transparent">
        <Poppins>{''}</Poppins>
      </Card>
      <View style={styles.image}>
        <Image
          height={moderateScale(80)}
          width={moderateScale(80)}
          source={{
            uri:
              item.sprites?.versions?.['generation-v']?.['black-white']
                ?.animated?.front_default ??
              item.sprites?.other?.['official-artwork']?.front_default,
          }}
        />
      </View>
    </>
  );
}
