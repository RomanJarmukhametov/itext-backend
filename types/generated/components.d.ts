import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_components_navigation_items';
  info: {
    displayName: 'Navigation Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    buttonPrimary: Schema.Attribute.String;
    buttonSecondary: Schema.Attribute.String;
    buttonSecondaryLink: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.navigation-item': ComponentsNavigationItem;
      'layout.hero': LayoutHero;
    }
  }
}
