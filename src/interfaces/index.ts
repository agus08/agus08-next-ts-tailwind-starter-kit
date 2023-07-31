import { StaticImageData } from 'next/image'

export interface Account {
  id: string
}
export interface Response<T> {
  code?: number
  messages?: string | string[]
  message?: string | string[]
  data?: T
  paginate?: paginate
  error_code?: number
  user_message?: string
  developer_message?: string
}

export interface paginate {
  current_page: number
  next_page: number
  per_page: number
  prev_page: number
  total_entries: number
  total_pages: number
}

export interface ResponseError {
  status: number
  developer_message: string
  user_message: string
  error_code: number
  more_info: string
}

export interface City {
  id: number
  code: string
  name: string
  slug: string
  province: string
  deleted_at?: Date | null
  created_at: Date
  updated_at: Date
}

export interface Category {
  id: number
  slug: string
  name: string
  seq: number
  deleted_at?: Date | null
  avatar_url?: string | null
  icon?: string | null | StaticImageData
  created_at: Date
  updated_at: Date
}

export interface Profession {
  id: number
  slug: string
  name: string
  deleted_at?: Date | null
  created_at: Date
  updated_at: Date
}

export interface Useraccount {
  id: number
  name: string
  email: string
  phone: string
  avatar?: string | null
  role: string
  subscribe_newsletter: number
  deleted_at?: Date | null
  created_at: Date
  updated_at: Date
  user_preference: string
  has_merchant: boolean
  city: City
  merchants: Merchant[]
}

export interface City {
  id: number
  code: string
  name: string
  slug: string
  province: string
  deleted_at?: Date | null
  created_at: Date
  updated_at: Date
}

export interface Banner {
  id: number
  label: string
  slug: string
  description: string
  promo_url: string
  banner_url: string
  seq: number
  deleted_at?: Date | null
  created_at: Date
  updated_at: Date
}

export interface Detail {
  id: number
  icon: string
  title: string
  description: string
  seq: number
}

export interface IOptionValue {
  label: string
  value: string | number
}

export interface Merchant {
  id: number
  name: string
  slug: string
  avatar_url: string
  verified_at: Date | null
  discount: number
  category_id: number
  category_name: string
  business_model_id: number
  business_model_name: string | 'Autopilot' | 'Semi-Autopilot' | 'Self-Managed'
  rating_score?: number | null
  price: number
  cover_url: string
  details: Detail[]
}

export interface MerchantQueryRequest {
  q?: string
  category?: string
  budget?: string
  businessModel?: string
  merchantType?: string
  page: number
  size: number
}

export interface PriceRange {
  id: number
  min: number
  max: number
  slug: string
  name: string
  deleted_at?: Date | null
  created_at: Date
  updated_at: Date
}

export interface MyOutlet {
  id: number
  code: string
  merchant_package_id: number
  promocode_usage_id?: number | null
  user_id: number
  amount: number
  down_payment: number
  additional_fee: number
  pic_name: string
  pic_phone: string
  pic_email: string
  pic_city: string
  expired_at: string
  paid_at?: string | null
  created_at: Date
  updated_at: Date
  status: string
  merchant_avatar: string
  merchant_name: string
  package_name: string
  invoice_number: string
}
