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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'bookingMethods',
      title: 'Booking Methods',
      type: 'array', 
      of: [{ type: 'string' }]
    },
    {
      name: 'operationTimes',
      title: 'Operation Times',
      type: 'object',
      fields: [
        {
          name: 'weekday',
          title: 'Weekday Opening and Closing Times',
          type: 'string'
        },
        {
          name: 'weekend',
          title: 'Weekends Opening and Closing Times',
          type: 'string'
        },
        {
          name: 'holiday',
          title: 'Holiday Opening and Closing Times',
          type: 'string'
        },
      ],
    },
    {
      name: 'featureImage',
      title: 'Feature Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'contact',
      title: 'Contact Details',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string'
        },
        {
          name: 'address',
          title: 'Physical Address',
          type: 'string'
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string'
        },
      ],
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Art', 'Business', 'Beauty', 'Drinks and Beverages', 'Entertainment', 'Experiences', 'Food', 'Finance', 'Fashion', 'Family and Kids', 'Mosques', 'Fitness', 'Homeware', 'Health', 'Islamic', 'Interiors and Furniture', 'Lifestyle', 'Literature', 'Luxury', 'Nutrition', 'Services', 'Travel', 'Technology', 'Venues',
        ],
        layout: 'checkbox', // Layout as checkboxes
        max: 2, // Maximum of two categories can be selected
      },
    },
    {
      name: 'aboutTag',
      title: 'About Tag',
      type: 'array',
      of: [{ type: 'string' }],
      // options: {
      //   list: [
      //     'Fully Halal Menu', 
      //     'Partial Halal Menu',
      //     'No Alcohol Served',
      //     'Alcohol Served ',
      //     'No Pork Served',
      //     'Pork Served',
      //     'Takeout',
      //     'Delivery',
      //     'Buffet Style',
      //     'Fine Dining',
      //     'Cafe Style ',
      //     'Catering Available ',
          
      //     'Good for Families',
      //     'Kid-Friendly',
      //     'Good for Couples',
      //     'Great for Birthdays',
      //     'Special Occasions',
      //     'Group Bookings',
      //     'Great for Solo ',
          
      //     'Luxury Vibe',
      //     'Relaxed Vibe',
      //     'Romantic Vibe',
      //     'Friendly Atmosphere',
      //     'Instagrammable ',
      //     'Parking On-Site',
      //     'Wheelchair Accessible ',
      //     'Open 24/7',
          
      //     'Women-Only ',
      //     'Men-Only ',
      //     'Prayer Facilities',
      //   ],
      //   layout: 'checkbox', // Layout as checkboxes
      // },
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
      name: 'openingTime',
      title: 'Opening Time',
      type: 'string',
    },
    {
      name: 'closingTime',
      title: 'Closing Time',
      type: 'string',
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
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Platform',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  // Add more platforms as needed
                ],
                layout: 'radio', // Layout as radio buttons
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}

export default businessSchema;
