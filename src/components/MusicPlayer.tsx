import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share, Repeat, Shuffle } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { WaveCard } from "./WaveCard"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface MusicPlayerProps {
  className?: string
}

export function MusicPlayer({ className }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(75)
  const [progress, setProgress] = useState(45)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <WaveCard variant="elevated" className={cn("", className)}>
      {/* Current Track */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-wave-gradient rounded-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-surface-primary rounded-lg flex items-center justify-center">
            <Volume2 className="w-6 h-6 text-wave-primary" />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-text-primary truncate">Night Drive</h3>
          <p className="text-sm text-text-secondary truncate">Wave Artists</p>
          <p className="text-xs text-text-muted">Electronic • 2024</p>
        </div>

        <div className="flex gap-2">
          <WaveButton
            variant="ghost"
            size="icon"
            onClick={() => setIsLiked(!isLiked)}
            className={cn(isLiked && "text-wave-error")}
          >
            <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
          </WaveButton>
          <WaveButton variant="ghost" size="icon">
            <Share className="w-4 h-4" />
          </WaveButton>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-text-muted">2:45</span>
          <div className="flex-1 h-2 bg-surface-tertiary rounded-full overflow-hidden">
            <div 
              className="h-full bg-wave-gradient transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-text-muted">6:20</span>
        </div>
        
        {/* Waveform Visualization */}
        <div className="flex items-center justify-center gap-1 h-8 mb-2">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1 bg-wave-border rounded-full transition-all duration-100",
                i < (progress / 100) * 40 ? "bg-wave-primary" : ""
              )}
              style={{ 
                height: `${Math.random() * 24 + 8}px`,
                animationDelay: `${i * 50}ms`
              }}
            />
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <WaveButton variant="ghost" size="icon">
          <Shuffle className="w-4 h-4" />
        </WaveButton>
        
        <WaveButton variant="outline" size="icon">
          <SkipBack className="w-4 h-4" />
        </WaveButton>
        
        <WaveButton
          variant="wave"
          size="lg"
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 rounded-full"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-1" />
          )}
        </WaveButton>
        
        <WaveButton variant="outline" size="icon">
          <SkipForward className="w-4 h-4" />
        </WaveButton>
        
        <WaveButton variant="ghost" size="icon">
          <Repeat className="w-4 h-4" />
        </WaveButton>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3">
        <Volume2 className="w-4 h-4 text-text-muted" />
        <div className="flex-1 h-2 bg-surface-tertiary rounded-full overflow-hidden">
          <div 
            className="h-full bg-wave-primary transition-all duration-200"
            style={{ width: `${volume}%` }}
          />
        </div>
        <span className="text-xs text-text-muted w-8">{volume}%</span>
      </div>

      {/* Queue Preview */}
      <div className="mt-4 pt-4 border-t border-wave-border">
        <h4 className="text-sm font-medium text-text-secondary mb-3">Up Next</h4>
        <div className="space-y-2">
          {[
            { title: "Neon Lights", artist: "Wave Artists" },
            { title: "Digital Dreams", artist: "Synth Wave" },
            { title: "Midnight City", artist: "Wave Artists" },
          ].map((track, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface-tertiary transition-all cursor-pointer">
              <div className="w-8 h-8 bg-surface-tertiary rounded flex items-center justify-center text-xs text-text-muted">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-primary truncate">{track.title}</p>
                <p className="text-xs text-text-muted truncate">{track.artist}</p>
              </div>
              <WaveButton variant="ghost" size="icon">
                <Play className="w-3 h-3" />
              </WaveButton>
            </div>
          ))}
        </div>
      </div>
    </WaveCard>
  )
}