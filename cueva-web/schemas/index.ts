import { localeString } from './objects/localeString';
import { localeText } from './objects/localeText';
import { localeBlock } from './objects/localeBlock';
import { room } from './room';
import { experience } from './experience';
import { journalPost } from './journalPost';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { stayPage } from './stayPage';
import { experiencesPage } from './experiencesPage';
import { locationPage } from './locationPage';
import { bookPage } from './bookPage';

export const schemaTypes = [
  // Primitive locale objects (used as field types)
  localeString,
  localeText,
  localeBlock,
  // Content documents
  room,
  experience,
  journalPost,
  // Page singletons
  homePage,
  stayPage,
  experiencesPage,
  locationPage,
  bookPage,
  // Global settings
  siteSettings,
];
