import { defineType, defineField } from 'sanity';

export const stayPage = defineType({
  name: 'stayPage',
  title: 'Stay Page',
  type: 'document',

  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Hero eyebrow',
      description: 'Small label above the headline. e.g. "Exclusive use · Cabanes, Castellón"',
      type: 'string',
      initialValue: 'Exclusive use · Cabanes, Castellón',
    }),
    defineField({
      name: 'headline',
      title: 'Hero headline',
      description: 'Supports italic — select text and press I.',
      type: 'array',
      of: [{
        type: 'block',
        styles: [],
        lists: [],
        marks: {
          decorators: [{ title: 'Italic', value: 'em' }],
          annotations: [],
        },
      }],
    }),
    defineField({
      name: 'subline',
      title: 'Hero subline',
      type: 'text',
      rows: 3,
      initialValue: 'A restored 19th-century Masia on a mountaintop with no neighbours — yours in full. Seven bedrooms, room for fourteen, the pool, the grounds and the mountain.',
    }),
    defineField({
      name: 'statGuests',
      title: 'Guests stat',
      type: 'string',
      initialValue: '14 guests',
    }),
    defineField({
      name: 'statBedrooms',
      title: 'Bedrooms stat',
      type: 'string',
      initialValue: '7 bedrooms',
    }),
    defineField({
      name: 'statFeature',
      title: 'Signature feature stat',
      type: 'string',
      initialValue: 'The cave',
    }),
    defineField({
      name: 'statBooking',
      title: 'Booking model stat',
      type: 'string',
      initialValue: 'Booked as one home',
    }),
    defineField({
      name: 'useCasesLabel',
      title: 'Use cases — section label',
      type: 'string',
      initialValue: 'However you gather',
    }),
    defineField({
      name: 'useCasesHeadline',
      title: 'Use cases — headline',
      type: 'string',
      initialValue: 'One house, four kinds of week.',
    }),
    defineField({
      name: 'roomsSectionLabel',
      title: 'Rooms section — label',
      type: 'string',
      initialValue: 'Inside the house',
    }),
    defineField({
      name: 'roomsSectionHeadline',
      title: 'Rooms section — headline',
      type: 'string',
      initialValue: 'Seven rooms, yours to assign.',
    }),
    defineField({
      name: 'singleRoomNote',
      title: 'Single room note',
      description: 'Shown below the room strip — when individual rooms are available.',
      type: 'text',
      rows: 3,
      initialValue: 'Rates are for the entire ecolodge. Consult us for high-season individual room dates with breakfast included.',
    }),
    defineField({
      name: 'closingHeadline',
      title: 'Closing section headline',
      type: 'string',
      initialValue: 'Have the place to yourselves.',
    }),
    defineField({
      name: 'closingBody',
      title: 'Closing section body',
      type: 'text',
      rows: 3,
      initialValue: "Tell us who's coming and your rough dates. We'll come back with everything you need to decide — usually within a day.",
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Stay Page' };
    },
  },
});
