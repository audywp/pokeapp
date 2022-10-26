import {View} from 'react-native';
import React from 'react';
import Poppins from '../../atoms/Text';
import Image from '../../atoms/Image';
import {moderateScale} from 'react-native-size-matters';
import Logo from '../../../assets/images/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../../../config/color';
import {styles} from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {goBack} from '../../../helpers/navigation';

type HeaderType = {
  backable?: boolean;
  titleSize?: number;
  withLogo?: boolean;
  title?: string;
};

export default function Header({
  backable = true,
  titleSize = 16,
  withLogo = false,
  title = 'PokeApp',
}: HeaderType) {
  return (
    <View style={styles.header}>
      <View style={styles.title}>
        {backable ? (
          <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
            <Ionicons
              name="arrow-back"
              size={moderateScale(32)}
              color={COLOR.text}
            />
          </TouchableOpacity>
        ) : null}

        <Poppins
          type="ExtraBold"
          size={titleSize}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{textTransform: 'capitalize'}}>
          {title}
        </Poppins>
      </View>

      {withLogo ? (
        <Image
          height={moderateScale(40)}
          width={moderateScale(40)}
          source={Logo}
        />
      ) : null}
    </View>
  );
}
