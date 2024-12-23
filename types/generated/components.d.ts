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
        'ProfessionalTranslations',
        'SpecializedTranslations',
        'ProcessAutomation',
        'Order',
        'TranslationAndVerification',
        'Delivery',
        'Shield',
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

export interface ComponentsValueCard extends Struct.ComponentSchema {
  collectionName: 'components_components_value_cards';
  info: {
    displayName: 'Value Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
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

export interface LayoutBlogPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_blog_page_headers';
  info: {
    displayName: 'Blog Page Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tagline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    primaryButtonText: Schema.Attribute.String;
    secondaryButtonLink: Schema.Attribute.String;
    secondaryButtonText: Schema.Attribute.String;
  };
}

export interface LayoutFaq extends Struct.ComponentSchema {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.card', true>;
    ctaButtonLink: Schema.Attribute.String;
    ctaButtonText: Schema.Attribute.String;
    ctaDescription: Schema.Attribute.Text;
    ctaHeading: Schema.Attribute.String;
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

export interface LayoutPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_headers';
  info: {
    displayName: 'Page Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
  };
}

export interface LayoutPeculiarities extends Struct.ComponentSchema {
  collectionName: 'components_layout_peculiarities';
  info: {
    description: '';
    displayName: 'Peculiarities';
  };
  attributes: {
    card: Schema.Attribute.Component<'components.card', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
  };
}

export interface LayoutReviews extends Struct.ComponentSchema {
  collectionName: 'components_layout_reviews';
  info: {
    displayName: 'Reviews';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
  };
}

export interface LayoutValues extends Struct.ComponentSchema {
  collectionName: 'components_layout_values';
  info: {
    description: '';
    displayName: 'Values';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    tagline: Schema.Attribute.String;
    valueCard: Schema.Attribute.Component<'components.value-card', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.card': ComponentsCard;
      'components.navigation-item': ComponentsNavigationItem;
      'components.stats': ComponentsStats;
      'components.value-card': ComponentsValueCard;
      'layout.advantages': LayoutAdvantages;
      'layout.blog-page-header': LayoutBlogPageHeader;
      'layout.cta': LayoutCta;
      'layout.faq': LayoutFaq;
      'layout.features': LayoutFeatures;
      'layout.hero': LayoutHero;
      'layout.logos': LayoutLogos;
      'layout.numbers': LayoutNumbers;
      'layout.page-header': LayoutPageHeader;
      'layout.peculiarities': LayoutPeculiarities;
      'layout.reviews': LayoutReviews;
      'layout.values': LayoutValues;
    }
  }
}
