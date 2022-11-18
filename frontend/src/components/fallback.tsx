export interface FallbackProps {
  blocktype: string
}

const Fallback = ({ blocktype }: FallbackProps) => {
  console.warn(`No component found for: ${blocktype}`)
  return null
}

export default Fallback
