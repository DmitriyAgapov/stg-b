// Interface automatically generated by schemas-to-ts

import { Seo } from '../../../../components/shared/interfaces/Seo';
import { Section } from '../../../section/content-types/section/section';
import { Seo_Plain } from '../../../../components/shared/interfaces/Seo';
import { Section_Plain } from '../../../section/content-types/section/section';
import { Seo_NoRelations } from '../../../../components/shared/interfaces/Seo';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Glavnaya {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    description?: string;
    seo?: Seo;
    sections: { data: Section[] };
    locale: string;
    localizations?: { data: Glavnaya[] };
  };
}
export interface Glavnaya_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  seo?: Seo_Plain;
  sections: Section_Plain[];
  locale: string;
  localizations?: Glavnaya[];
}

export interface Glavnaya_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  seo?: Seo_NoRelations;
  sections: number[];
  locale: string;
  localizations?: Glavnaya[];
}

export interface Glavnaya_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  seo?: Seo_Plain;
  sections: AdminPanelRelationPropertyModification<Section_Plain>;
  locale: string;
  localizations?: Glavnaya[];
}
