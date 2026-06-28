import { localeString } from './objects/localeString';
import { localeText } from './objects/localeText';
import { localeBlock } from './objects/localeBlock';
import { room } from './room';
import { experience } from './experience';
import { journalPost } from './journalPost';
import { siteSettings } from './siteSettings';
import { homepage } from './homepage';
import { locationPage } from './locationPage';
import { bookPage } from './bookPage';
import { stayPage } from './stayPage';

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
  homepage,
  stayPage,
  locationPage,
  bookPage,
  // Global settings
  siteSettings,
];
