import type { CollectionConfig } from "payload";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "featured", "updatedAt"],
  },
  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      required: true,
      index: true,
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (typeof value === "string" && value.trim()) {
              return slugify(value);
            }

            const title = typeof data?.title === "string" ? data.title : "";
            return slugify(title);
          },
        ],
      },
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        {
          label: "Bedroom",
          value: "bedroom",
        },
        {
          label: "Kitchen",
          value: "kitchen",
        },
        {
          label: "Wardrobe",
          value: "wardrobe",
        },
      ],
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "teaser",
      type: "textarea",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "concept",
      type: "textarea",
    },
    {
      name: "functionValue",
      type: "textarea",
    },
    {
      name: "visualTone",
      type: "textarea",
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
