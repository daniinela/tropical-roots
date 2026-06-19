import { z } from 'zod'

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  whatsapp: z.string().min(6, 'WhatsApp number is required'),
  interest_type: z.enum(['retirement', 'vacation_home', 'investment', 'relocation']),
  message: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>