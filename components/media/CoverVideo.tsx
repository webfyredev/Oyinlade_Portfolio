
import { Video } from "lucide-react";

interface CoverVideoProps {
  src?: string;
  label: string;
  hint?: string;
  aspect?: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export default function CoverVideo({
  src,
  label,
  hint,
  aspect = "aspect-video",
  poster,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
}: CoverVideoProps) {
  if (src) {
    return (
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-xl border border-line bg-surface-1 group`}
      >
        <video
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={autoPlay ? true : muted}
          playsInline
          preload="metadata"
          aria-label={label}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-dashed border-line-strong bg-surface-1/60 px-6 text-center`}
      role="img"
      aria-label={`Video placeholder: ${label}`}
    >
      <Video
        className="h-5 w-5 text-ink-faint"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <div>
        <p className="text-[13px] font-medium text-ink-muted">
          {label}
        </p>

        {hint && (
          <p className="mt-1 font-mono text-[11px] text-ink-faint">
            {hint}
          </p>
        )}
      </div>
    </div>
  );
}
