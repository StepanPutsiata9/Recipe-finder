import { FeatherIcon } from './icon';
export function getIconByRouteName(routeName: string, color: string) {
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
