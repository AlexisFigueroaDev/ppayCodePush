export const AvatarFormat = {
  rounded: 'rounded',
  square: 'square',
}

export interface AvatarProps {
  variant?: keyof typeof AvatarFormat
  name: string
  uri?: string
}
