import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import Image from '../../atoms/Image';
import Poppins from '../../atoms/Text';
import CardType from '../../molecules/CardType/index';

import HeaderOrganism from '../../organisms/Header';
import {styles} from './style';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLOR} from '../../../config/color';
import {ScrollView} from 'react-native-gesture-handler';
import PowerBar from '../../molecules/PowerBar';

export default function DetailTemplate({data}: Record<string, any>) {
  console.log(data);
  return (
    <SafeAreaView style={styles(COLOR[data.types[0].type.name]).heroColor}>
      <ScrollView>
        <View>
          <HeaderOrganism title={data.name} titleSize={28} />
        </View>

        {/* <View style={styles().shadow} /> */}

        <View style={styles().imageHero}>
          <Image
            height={moderateScale(250)}
            width={moderateScale(250)}
            source={{
              uri: data.sprites.other['official-artwork'].front_default,
            }}
          />
        </View>
        <View style={styles().blackContainer}>
          <View style={styles().type}>
            {data.types.map((val: Record<string, any>, idx: number) => {
              return (
                <CardType
                  title={val.type.name}
                  color={COLOR[val.type.name]}
                  key={idx.toString()}
                />
              );
            })}
          </View>
          <View>
            <Poppins
              color={COLOR[data.types[0].type.name]}
              textAlign="center"
              size={18}
              type="Bold">
              About
            </Poppins>
          </View>
          <View style={styles().about}>
            <View style={styles().center}>
              <View style={styles().aboutDesc}>
                <MaterialCommunityIcons
                  name="weight"
                  color={COLOR.secondaryText}
                  size={moderateScale(24)}
                  style={{marginRight: moderateScale(8)}}
                />
                <Poppins size={12}>{data.weight / 10} kg</Poppins>
              </View>
              <View style={{marginTop: moderateScale(8)}}>
                <Poppins size={12} textAlign="center">
                  Weight
                </Poppins>
              </View>
            </View>
            <View style={styles().center}>
              <View style={styles().aboutDesc}>
                <MaterialIcons
                  name="height"
                  color={COLOR.secondaryText}
                  size={moderateScale(24)}
                  style={{marginRight: moderateScale(8)}}
                />
                <Poppins size={12}>{data.height / 10} m</Poppins>
              </View>
              <View style={{marginTop: moderateScale(8)}}>
                <Poppins size={12} textAlign="center">
                  Height
                </Poppins>
              </View>
            </View>
            <View style={styles().center}>
              <View style={styles().aboutDesc}>
                <MaterialIcons
                  name="local-fire-department"
                  color={COLOR.secondaryText}
                  size={moderateScale(24)}
                  style={{marginRight: moderateScale(8)}}
                />
                <Poppins size={12}>{data.abilities[0].ability.name}</Poppins>
              </View>
              <View style={{marginTop: moderateScale(8)}}>
                <Poppins size={12} textAlign="center">
                  Ability
                </Poppins>
              </View>
            </View>
          </View>

          <View style={{marginTop: moderateScale(16)}}>
            <View>
              <Poppins
                color={COLOR[data.types[0].type.name]}
                textAlign="center"
                size={18}
                type="Bold">
                Base Stats
              </Poppins>
            </View>
          </View>

          <View style={{marginTop: moderateScale(16)}}>
            {data.stats.map((val: Record<string, any>, idx: number) => {
              return (
                <PowerBar
                  title={val.stat.name.split('-').join(' ')}
                  key={idx.toString()}
                  value={val.base_stat / 100}
                  color={COLOR[data.types[0].type.name]}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
