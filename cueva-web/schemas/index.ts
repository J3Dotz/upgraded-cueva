import { localeString } from './objects/localeString';
import { localeText } from './objects/localeText';
import { localeBlock } from './objects/localeBlock';
import { room } from './room';
import { experience } from './experience';
import { journalPost } from './journalPost';
import { siteSettings } from './siteSettings';

export const schemaTypes = [
  // Primitive locale objects (used as field types)
  localeString,
  localeText,
  localeBlock,
  // Documents
  room,
  experience,
  journalPost,
  siteSettings,
];
