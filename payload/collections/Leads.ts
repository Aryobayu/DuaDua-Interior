import type { CollectionConfig } from "payload";

const canManageLeads: NonNullable<CollectionConfig["access"]>["read"] = ({ req }) => {
  return Boolean(req.user);
};

export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "service", "status", "createdAt"],
    group: "CRM",
  },
  access: {
    create: () => true,
    read: canManageLeads,
    update: canManageLeads,
    delete: canManageLeads,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "service",
      type: "text",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
    },
    {
      name: "sourcePage",
      type: "text",
      required: true,
    },
    {
      name: "consent",
      type: "checkbox",
      defaultValue: true,
      required: true,
    },
    {
      name: "utm",
      type: "group",
      fields: [
        {
          name: "source",
          type: "text",
        },
        {
          name: "medium",
          type: "text",
        },
        {
          name: "campaign",
          type: "text",
        },
        {
          name: "term",
          type: "text",
        },
        {
          name: "content",
          type: "text",
        },
      ],
    },
    {
      name: "ipAddress",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: [
        {
          label: "New",
          value: "new",
        },
        {
          label: "Contacted",
          value: "contacted",
        },
        {
          label: "Qualified",
          value: "qualified",
        },
        {
          label: "Closed",
          value: "closed",
        },
      ],
      required: true,
    },
    {
      name: "internalNotes",
      type: "textarea",
      admin: {
        description: "Catatan internal tim sales.",
      },
    },
  ],
};
