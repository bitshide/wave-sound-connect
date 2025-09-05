import { ChatSidebar } from "@/components/ChatSidebar"
import { ChatArea } from "@/components/ChatArea"
import { MusicPlayer } from "@/components/MusicPlayer"
import { WaveButton } from "@/components/WaveButton"
import { WaveCard } from "@/components/WaveCard"
import { Music, MessageCircle, Phone, Settings } from "lucide-react"
import { useState } from "react"
import waveHeroBg from "@/assets/wave-hero-bg.jpg"

const Index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "music">("chat")

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main Navigation Sidebar */}
      <div className="w-16 bg-surface-primary border-r border-wave-border flex flex-col items-center py-4 gap-4">
        <div className="w-10 h-10 bg-wave-gradient rounded-lg flex items-center justify-center">
          <span className="text-sm font-bold text-wave-primary-foreground">W</span>
        </div>
        
        <div className="w-8 h-px bg-wave-border"></div>
        
        <WaveButton
          variant={activeTab === "chat" ? "wave" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("chat")}
        >
          <MessageCircle className="w-5 h-5" />
        </WaveButton>
        
        <WaveButton
          variant={activeTab === "music" ? "wave" : "ghost"}
          size="icon"
          onClick={() => setActiveTab("music")}
        >
          <Music className="w-5 h-5" />
        </WaveButton>
        
        <WaveButton variant="ghost" size="icon">
          <Phone className="w-5 h-5" />
        </WaveButton>
        
        <div className="flex-1"></div>
        
        <WaveButton variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </WaveButton>
      </div>

      {activeTab === "chat" ? (
        <>
          {/* Chat Interface */}
          <ChatSidebar />
          <ChatArea />
        </>
      ) : (
        <>
          {/* Music Interface */}
          <div className="w-80 bg-surface-primary border-r border-wave-border p-4">
            <h2 className="text-lg font-semibold wave-text-gradient mb-4">Music Library</h2>
            
            {/* Music Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search music..."
                className="w-full bg-surface-secondary border border-wave-border rounded-lg px-4 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-wave-ring focus:border-wave-primary transition-all"
              />
            </div>

            {/* Playlists */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide">Playlists</h3>
              {[
                { name: "Night Vibes", tracks: 24 },
                { name: "Electronic Mix", tracks: 18 },
                { name: "Chill Wave", tracks: 31 },
                { name: "Gaming Music", tracks: 15 },
              ].map((playlist, i) => (
                <WaveCard key={i} variant="transparent" size="sm" className="cursor-pointer hover:bg-surface-tertiary transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-wave-gradient rounded-lg flex items-center justify-center">
                      <Music className="w-5 h-5 text-wave-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">{playlist.name}</p>
                      <p className="text-xs text-text-muted">{playlist.tracks} tracks</p>
                    </div>
                  </div>
                </WaveCard>
              ))}
            </div>
          </div>

          {/* Music Main Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Hero Section */}
            <div 
              className="relative h-64 rounded-xl overflow-hidden mb-8"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.8), rgba(168, 85, 247, 0.6)), url(${waveHeroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent"></div>
              <div className="relative h-full flex items-center p-8">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">Discover New Music</h1>
                  <p className="text-lg text-white/80 mb-4">Explore thousands of tracks from Yandex Music, SoundCloud, and more</p>
                  <WaveButton variant="wave" size="lg">
                    Start Listening
                  </WaveButton>
                </div>
              </div>
            </div>

            {/* Featured Tracks */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Featured Tracks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Night Drive", artist: "Wave Artists", duration: "4:32" },
                  { title: "Neon Lights", artist: "Synth Wave", duration: "3:45" },
                  { title: "Digital Dreams", artist: "Future Bass", duration: "5:12" },
                  { title: "Midnight City", artist: "Wave Artists", duration: "4:01" },
                  { title: "Electric Soul", artist: "Bass Drop", duration: "3:28" },
                  { title: "Cosmic Vibes", artist: "Space Wave", duration: "6:15" },
                ].map((track, i) => (
                  <WaveCard key={i} variant="elevated" size="sm" className="cursor-pointer hover:scale-105 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-wave-gradient rounded-lg flex items-center justify-center">
                        <Music className="w-6 h-6 text-wave-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-text-primary truncate">{track.title}</p>
                        <p className="text-xs text-text-secondary truncate">{track.artist}</p>
                      </div>
                      <span className="text-xs text-text-muted">{track.duration}</span>
                    </div>
                  </WaveCard>
                ))}
              </div>
            </div>

            {/* Popular Playlists */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Popular Playlists</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { name: "Electronic Essentials", tracks: 50, image: "🎵" },
                  { name: "Bass Heaven", tracks: 35, image: "🔊" },
                  { name: "Chill Vibes", tracks: 42, image: "😌" },
                  { name: "Gaming Beats", tracks: 28, image: "🎮" },
                ].map((playlist, i) => (
                  <WaveCard key={i} variant="elevated" className="cursor-pointer hover:scale-105 transition-all">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-wave-gradient rounded-lg flex items-center justify-center mx-auto mb-3 text-2xl">
                        {playlist.image}
                      </div>
                      <h3 className="font-semibold text-text-primary mb-1">{playlist.name}</h3>
                      <p className="text-sm text-text-secondary">{playlist.tracks} tracks</p>
                    </div>
                  </WaveCard>
                ))}
              </div>
            </div>
          </div>

          {/* Music Player Sidebar */}
          <div className="w-80 p-4">
            <MusicPlayer />
          </div>
        </>
      )}
    </div>
  )
}

export default Index;
