const businessSchema = {
    name: 'business',
    title: 'Business',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
      },
        {
            name: "contact",
            title: "Contact Details",
            type: "object",
            fields: [
              {
                name: "phone",
                title: "Phone Number",
                type: "string"
              },
              {
                name: "email",
                title: "Email Address",
                type: "string"
              },
              {
                name: "address",
                title: "Physical Address",
                type: "string"
              },
            ],
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'string',
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array', 
            of: [{ type: 'string' }]
        },
        {
            name: 'longDescription',
            title: 'Long Description',
            type: 'text',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: "socialMedia",
            title: "Social Media",
            type: "array",
            of: [
              {
                type: "object",
                title: "Platform",
                fields: [
                  {
                    name: "platform",
                    title: "Platform",
                    type: "string",
                    options: {
                      list: [
                        { title: "Twitter", value: "twitter" },
                        { title: "Facebook", value: "facebook" },
                        { title: "Instagram", value: "instagram" },
                        { title: "LinkedIn", value: "linkedin" },
                        // Add more platforms as needed
                      ],
                      layout: "radio", // Layout as radio buttons
                    },
                  },
                  {
                    name: "url",
                    title: "URL",
                    type: "url",
                  },
                ],
              },
            ],
          },
        ],
}

  export default businessSchema;
  