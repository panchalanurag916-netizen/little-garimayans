import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length === 10) return `+91 ${cleaned.slice(0,5)} ${cleaned.slice(5)}`
  return phone
}

export function truncate(str: string, n: number): string {
  return str.length > n ? str.slice(0, n - 1) + '…' : str
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export function apiResponse<T>(
  data: T,
  message = 'Success',
  status = 200
): { data: T; message: string; success: boolean } {
  return { data, message, success: status < 400 }
}

export function apiError(
  message: string,
  status = 500
): { message: string; success: boolean } {
  return { message, success: false }
}

export const PROGRAMS = [
  { id: 'playgroup', label: 'Playgroup',  age: '1.5 – 2.5 yrs', emoji: '🌱' },
  { id: 'nursery',   label: 'Nursery',    age: '2.5 – 3.5 yrs', emoji: '🌸' },
  { id: 'jr-kg',     label: 'Junior KG',  age: '3.5 – 4.5 yrs', emoji: '🚀' },
  { id: 'sr-kg',     label: 'Senior KG',  age: '4.5 – 6 yrs',   emoji: '⭐' },
]

export const INDIAN_STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
  'Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Jammu & Kashmir',
  'Ladakh','Chandigarh','Puducherry',
]
