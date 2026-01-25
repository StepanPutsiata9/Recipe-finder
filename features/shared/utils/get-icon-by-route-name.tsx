import { JSX } from 'react';
import { FeatherIcon } from '../components/icon/icon';
export function getIconByRouteName(routeName: string, color: string): JSX.Element {
  switch (routeName) {
    case 'index':
      return <FeatherIcon name="home" size={24} color={color} />;
    case 'favorites':
      return <FeatherIcon name="heart" size={24} color={color} />;
    case 'settings':
      return <FeatherIcon name="settings" size={24} color={color} />;
    default:
      return <FeatherIcon name="home" size={24} color={color} />;
  }
}
