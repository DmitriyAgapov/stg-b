// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';

export interface Title {
  Title: string;
  shortText?: any;
  Text?: any;
  media?: { data: Media[] };
}
export interface Title_Plain {
  Title: string;
  shortText?: any;
  Text?: any;
  media?: Media[];
}

export interface Title_NoRelations {
  Title: string;
  shortText?: any;
  Text?: any;
  media?: number[];
}

