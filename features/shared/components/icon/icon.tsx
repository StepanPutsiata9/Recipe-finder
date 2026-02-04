import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import { ComponentProps, JSX } from 'react';

interface IFeatherIcon {
  name: ComponentProps<typeof Feather>['name'];
  size: number;
  color: string;
}
export const FeatherIcon = ({ name, size, color }: IFeatherIcon): JSX.Element => {
  return <Feather name={name || 'home'} size={size} color={color} />;
};

interface IIoniconsIcon {
  name: ComponentProps<typeof Ionicons>['name'];
  size: number;
  color: string;
}
export const IoniconsIcon = ({ name, size, color }: IIoniconsIcon): JSX.Element => {
  return <Ionicons name={name || 'home'} size={size} color={color} />;
};
