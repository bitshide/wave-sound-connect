import { Plus, Music, X } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { WaveCard } from "./WaveCard"
import { useState } from "react"

export function PlaylistCreator() {
  const [isCreating, setIsCreating] = useState(false)
  const [playlistName, setPlaylistName] = useState("")
  const [playlists, setPlaylists] = useState([
    { id: 1, name: "Night Vibes", tracks: 24 },
    { id: 2, name: "Electronic Mix", tracks: 18 },
    { id: 3, name: "Chill Wave", tracks: 31 },
    { id: 4, name: "Gaming Music", tracks: 15 },
  ])

  const createPlaylist = () => {
    if (playlistName.trim()) {
      setPlaylists([...playlists, {
        id: Date.now(),
        name: playlistName,
        tracks: 0
      }])
      setPlaylistName("")
      setIsCreating(false)
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide">Мои плейлисты</h3>
        <WaveButton 
          variant="ghost" 
          size="icon" 
          onClick={() => setIsCreating(true)}
        >
          <Plus className="w-4 h-4" />
        </WaveButton>
      </div>

      {isCreating && (
        <WaveCard variant="elevated" size="sm" className="p-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={playlistName}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Название плейлиста..."
              className="flex-1 bg-surface-secondary border border-wave-border rounded px-2 py-1 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-wave-primary"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  createPlaylist()
                }
              }}
            />
            <WaveButton variant="wave" size="icon" onClick={createPlaylist}>
              <Plus className="w-3 h-3" />
            </WaveButton>
            <WaveButton variant="ghost" size="icon" onClick={() => setIsCreating(false)}>
              <X className="w-3 h-3" />
            </WaveButton>
          </div>
        </WaveCard>
      )}

      {playlists.map((playlist) => (
        <WaveCard 
          key={playlist.id} 
          variant="transparent" 
          size="sm" 
          className="cursor-pointer hover:bg-surface-tertiary transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-wave-gradient rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-wave-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">{playlist.name}</p>
              <p className="text-xs text-text-muted">{playlist.tracks} треков</p>
            </div>
          </div>
        </WaveCard>
      ))}
    </div>
  )
}