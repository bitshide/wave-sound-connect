import { MessageCircle, Users, Hash, Volume2, Settings, Search, Plus } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { WaveCard } from "./WaveCard"
import { cn } from "@/lib/utils"

interface ChatSidebarProps {
  className?: string
}

export function ChatSidebar({ className }: ChatSidebarProps) {
  const servers = [
    { id: 1, name: "Wave Community", active: true },
    { id: 2, name: "Gaming Hub", active: false },
    { id: 3, name: "Tech Talk", active: false },
  ]

  const channels = [
    { id: 1, name: "general", type: "text", unread: 3 },
    { id: 2, name: "random", type: "text", unread: 0 },
    { id: 3, name: "voice-chat", type: "voice", active: true },
    { id: 4, name: "music-room", type: "voice", active: false },
  ]

  const directMessages = [
    { id: 1, name: "Alex Johnson", online: true, unread: 2 },
    { id: 2, name: "Sarah Chen", online: false, unread: 0 },
    { id: 3, name: "Mike Davis", online: true, unread: 1 },
  ]

  return (
    <div className={cn("w-80 bg-surface-primary border-r border-wave-border flex flex-col h-full", className)}>
      {/* Header */}
      <div className="p-4 border-b border-wave-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold wave-text-gradient">Wave Community</h2>
          <WaveButton variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </WaveButton>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full bg-surface-secondary border border-wave-border rounded-lg pl-10 pr-4 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-wave-ring focus:border-wave-primary transition-all"
          />
        </div>
      </div>

      {/* Servers - Minimized */}
      <div className="px-4 py-2 border-b border-wave-border">
        <div className="flex items-center gap-2 overflow-x-auto">
          {servers.map((server) => (
            <div
              key={server.id}
              className={cn(
                "flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold cursor-pointer transition-all",
                server.active ? "bg-wave-gradient text-wave-primary-foreground" : "bg-surface-tertiary text-text-secondary hover:bg-surface-tertiary"
              )}
              title={server.name}
            >
              {server.name.split(' ').map(word => word[0]).join('')}
            </div>
          ))}
          <WaveButton variant="ghost" size="icon" className="flex-shrink-0 w-8 h-8">
            <Plus className="w-3 h-3" />
          </WaveButton>
        </div>
      </div>

      {/* Channels - Telegram Style */}
      <div className="p-4 border-b border-wave-border">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide">Каналы</h3>
          <WaveButton variant="ghost" size="icon">
            <Plus className="w-4 h-4" />
          </WaveButton>
        </div>
        <div className="space-y-1">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-surface-tertiary",
                channel.type === "voice" && channel.active && "bg-wave-primary/10"
              )}
            >
              <div className="relative">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                  channel.type === "text" ? "bg-wave-primary text-wave-primary-foreground" : "bg-wave-success text-white"
                )}>
                  {channel.type === "text" ? (
                    <Hash className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </div>
                {channel.type === "voice" && channel.active && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-wave-success rounded-full border-2 border-surface-primary">
                    <div className="w-full h-full rounded-full bg-wave-success animate-pulse"></div>
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-text-primary truncate">
                    {channel.type === "text" ? "#" : "🔊"} {channel.name}
                  </span>
                  {channel.unread > 0 && (
                    <span className="bg-wave-primary text-wave-primary-foreground text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                      {channel.unread}
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-muted truncate">
                  {channel.type === "text" ? "Текстовый канал" : channel.active ? "В голосовом канале" : "Голосовой канал"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Messages */}
      <div className="p-4 flex-1 overflow-y-auto">
        <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wide mb-3">Direct Messages</h3>
        <div className="space-y-1">
          {directMessages.map((dm) => (
            <div
              key={dm.id}
              className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-surface-tertiary"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-surface-tertiary rounded-full flex items-center justify-center text-sm font-medium text-text-primary">
                  {dm.name.split(' ').map(n => n[0]).join('')}
                </div>
                {dm.online && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-wave-success rounded-full border-2 border-surface-primary"></div>
                )}
              </div>
              <span className="text-sm text-text-primary flex-1">{dm.name}</span>
              {dm.unread > 0 && (
                <span className="bg-wave-primary text-wave-primary-foreground text-xs px-2 py-1 rounded-full min-w-[20px] text-center">
                  {dm.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* User Panel */}
      <div className="p-4 border-t border-wave-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-wave-gradient rounded-full flex items-center justify-center text-sm font-semibold text-wave-primary-foreground">
              YU
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-wave-success rounded-full border-2 border-surface-primary"></div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-text-primary">Your User</p>
            <p className="text-xs text-text-muted">Online</p>
          </div>
          <WaveButton variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </WaveButton>
        </div>
      </div>
    </div>
  )
}