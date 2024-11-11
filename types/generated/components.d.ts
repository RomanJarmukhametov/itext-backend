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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.navigation-item': ComponentsNavigationItem;
    }
  }
}
