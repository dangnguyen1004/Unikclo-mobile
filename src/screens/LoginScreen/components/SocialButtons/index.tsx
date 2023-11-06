import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import FaceBookLogo from '../../../../assets/icons/svg/FaceBookLogo.svg';
import GoogleLogo from '../../../../assets/icons/svg/GoogleLogo.svg';
import {SocialButton, Space} from '../../../../components';

interface Props {
  onPressGoogle?: () => void;
  onPressFaceBook?: () => void;
}

const SocialButtons: FC<Props> = props => {
  const {onPressFaceBook, onPressGoogle} = props;

  return (
    <View style={styles.container}>
      <SocialButton Icon={GoogleLogo} onPress={onPressGoogle} />
      <Space width={12} />
      <SocialButton Icon={FaceBookLogo} onPress={onPressFaceBook} />
    </View>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
  },
});
