import { AuthService } from './auth.service';
import { NavigationService } from './navigation.service';

export const entities: any[] = [
  AuthService,
  NavigationService
];

export * from './auth.service';
export * from './navigation.service';
