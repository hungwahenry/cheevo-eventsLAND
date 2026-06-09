export function EventDescription({ text }: { text: string }) {
  return (
    <div className="mt-12 max-w-2xl leading-7 whitespace-pre-line text-foreground/80">
      {text}
    </div>
  )
}
