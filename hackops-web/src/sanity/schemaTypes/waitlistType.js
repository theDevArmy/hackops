import { defineField, defineType} from 'sanity'

export const waitlistType = defineType({
  name: 'waitlist',
  title: 'Waitlist',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      type: 'string',
    }),
  ]
})
