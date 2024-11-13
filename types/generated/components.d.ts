import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsCard extends Struct.ComponentSchema {
  collectionName: 'components_components_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      [
        'Professional',
        'Specialized',
        'Automation',
        'Experience',
        'Deadline',
        'Privacy',
        'Support',
        'Solutions',
        'Culture',
      ]
    >;
  };
}

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

export interface ComponentsStats extends Struct.ComponentSchema {
  collectionName: 'components_components_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    description: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface LayoutAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_layout_advantages';
  info: {
    displayName: 'Advantages';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
  };
}

export interface LayoutFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
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

export interface LayoutLogos extends Struct.ComponentSchema {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logos';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    tagline: Schema.Attribute.String;
  };
}

export interface LayoutNumbers extends Struct.ComponentSchema {
  collectionName: 'components_layout_numbers';
  info: {
    displayName: 'Numbers';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'components.stats', true>;
    tagline: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card': ComponentsCard;
      'components.navigation-item': ComponentsNavigationItem;
      'components.stats': ComponentsStats;
      'layout.advantages': LayoutAdvantages;
      'layout.features': LayoutFeatures;
      'layout.hero': LayoutHero;
      'layout.logos': LayoutLogos;
      'layout.numbers': LayoutNumbers;
    }
  }
}
