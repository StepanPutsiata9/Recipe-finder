import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
export function getIconByRouteName(routeName: string, color: string) {
  switch (routeName) {
    case 'index':
      return <Feather name="home" size={24} color={color} />;
    case 'favorites':
      return <Feather name="heart" size={24} color={color} />;
    case 'settings':
      return <Ionicons name="settings-outline" size={24} color={color} />;
    default:
      return <Feather name="home" size={24} color={color} />;
  }
}
