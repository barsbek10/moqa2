import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      buttons: z.array(
        z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
          icon: z.string().optional(),
          type: z.string().optional(),
        }),
      ),
      image: z.string(),
    }),
    explore_menu: z.object({
      enable: z.boolean(),
      title: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          image: z.string(),
          description: z.string(),
          icon: z.string(),
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
        }),
      ),
    }),
    about: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
    services: z.object({
      enable: z.boolean(),
      title: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          description: z.string(),
          image: z.string(),
        }),
      ),
    }),
    features: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string().optional(),
      images: z.array(z.string()),
      key_benefits: z.array(
        z.object({
          benefit: z.string(),
          icon: z.string(),
        }),
      ),
    }),
    blog_section: z.object({
      enable: z.boolean(),
      title: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),
  }),
});

const galleryCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/gallery" }),
  schema: z.object({
    title: z.string().optional(),
    subtitle: z.string().optional(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    images: z.array(
      z.object({ image: z.string(), description: z.string().optional(), width: z.number().optional() })
    ),
  }),
})

// Post collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    categories: z.array(z.string()).optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// about collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    media: z.object({
      title: z.string(),
      image: z.string(),
      link: z.string(),
    }),
    key_benefits: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
      }),
    ),
    information: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      metrics: z.array(
        z.object({
          name: z.string(),
          counter: z.object({
            count: z.string(),
            count_suffix: z.string(),
            count_prefix: z.string(),
            count_duration: z.number(),
          }),
        }),
      ),
    }),
    draft: z.boolean().optional(),
  }),
});

// contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    open_hours: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }),
});

// contact collection schema
const bookCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/book" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    google_map: z.string(),
    draft: z.boolean().optional(),
  }),
});

// Testimonials Section collection schema
const testimonialSectionCollection = defineCollection({
  loader: glob({
    pattern: "testimonial.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        avatar: z.string(),
        title: z.string(),
        address: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

// Menu collection schema
const menuCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/menu" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    foods: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        price: z.string(),
        currency: z.string(),
        group: z.string(),
      }),
    ),
  }),
});

// Testimonials Section collection schema
const foodAppsSectionCollection = defineCollection({
  loader: glob({
    pattern: "foodapps.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    images: z.array(
      z.object({
        location: z.string(),
        link: z.string(),
      }),
    ),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  menu: menuCollection,
  blog: blogCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,
  book: bookCollection,
  testimonialSection: testimonialSectionCollection,
  gallery: galleryCollection,
  foodAppsSection: foodAppsSectionCollection,
};
