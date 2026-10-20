import Image from "next/image";
import { ImageIcon } from "lucide-react";

export default function CoverImage({
  src,
  alt,
  label,
  hint,
  aspect = "aspect-video",
  priority = false,
  sizes = "(min-width: 768px) 700px, 100vw",
}: {
  src?: string;
  alt: string;
  label: string;
  hint?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative ${aspect} w-full overflow-hidden rounded-xl border border-line bg-surface-1 group`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-line-strong bg-surface-1/60 px-6 text-center`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <ImageIcon className="h-5 w-5 text-ink-faint" strokeWidth={1.5} aria-hidden="true" />
      <div>
        <p className="text-[13px] font-medium text-ink-muted">{label}</p>
        {hint && <p className="mt-1 font-mono text-[11px] text-ink-faint">{hint}</p>}
      </div>
    </div>
  );
}
