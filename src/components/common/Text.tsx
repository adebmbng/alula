import React from 'react';
import {StyleSheet, Text as Text_, TextProps} from 'react-native';

import {Colors} from '../../configs/theme_config';

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  regular: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  body: {
    fontWeight: 'normal',
    fontSize: 12,
  },
  bodyBold: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  caption: {
    fontWeight: 'normal',
    fontSize: 10,
  },
  captionBold: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  input: {
    fontWeight: '300',
    fontSize: 14,
  },
});

type Variant =
  | 'title'
  | 'subtitle'
  | 'regular'
  | 'body'
  | 'body-bold'
  | 'caption'
  | 'caption-bold'
  | 'input';

type Color =
  | 'primary'
  | 'secondary'
  | 'grey-medium'
  | 'grey-soft'
  | 'white'
  | 'dark';

interface Props extends TextProps {
  variant?: Variant;
  color?: Color;
  value: string;
}

const Text: React.FC<Props> = ({
  variant = 'regular',
  value,
  color = 'grey-dark',
  ...props
}) => {
  const createVariantStyle = () => {
    switch (variant) {
      case 'body':
        return styles.body;
      case 'body-bold':
        return styles.bodyBold;
      case 'caption':
        return styles.caption;
      case 'caption-bold':
        return styles.captionBold;
      case 'input':
        return styles.input;
      case 'regular':
        return styles.regular;
      case 'subtitle':
        return styles.subtitle;
      case 'title':
        return styles.title;
    }
  };

  const createColorStyle = () => {
    switch (color) {
      case 'primary':
        return Colors.Primary;
      case 'secondary':
        return Colors.Secondary;
      case 'white':
        return Colors.White;
      case 'dark':
        return Colors.Dark;
      case 'grey-medium':
        return Colors.GreyMedium;
      case 'grey-soft':
        return Colors.GreySoft;
      default:
        return Colors.GreyDark;
    }
  };

  return (
    <Text_
      {...props}
      style={[createVariantStyle(), {color: createColorStyle()}, props.style]}>
      {value}
    </Text_>
  );
};

export default Text;
