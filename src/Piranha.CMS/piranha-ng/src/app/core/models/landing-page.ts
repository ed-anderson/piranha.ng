import { WelcomeMessageRegion } from './regions/welcome-message-region';

export interface LandingPage {
  id: string;
  regions: {
    welcomeMessageRegion: WelcomeMessageRegion;
  };
}
