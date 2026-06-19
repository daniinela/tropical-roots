// src/types/lead.ts

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'closed'

export type InterestType = 'retirement' | 'vacation_home' | 'investment' | 'relocation'

export interface Lead {
  id?: string
  created_at?: string
  name: string
  email: string
  whatsapp: string
  country: string
  interest_type: InterestType
  budget_range?: string
  timeline?: string
  source?: string
  status?: LeadStatus
}

export interface LeadInsert extends Omit<Lead, 'id' | 'created_at'> {}