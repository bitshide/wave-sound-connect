import { Send, Paperclip, Smile, Phone, Video, MoreVertical, Hash } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { WaveCard } from "./WaveCard"
import { cn } from "@/lib/utils"

interface ChatAreaProps {
  className?: string
}

export function ChatArea({ className }: ChatAreaProps) {
  const messages = [
    {
      id: 1,
      user: "Alex Johnson",
      content: "Hey everyone! Just shared a new track in the music room 🎵",
      timestamp: "2:34 PM",
      avatar: "AJ",
      isOwn: false,
    },
    {
      id: 2,
      user: "You",
      content: "That sounds amazing! I'll check it out right now",
      timestamp: "2:35 PM",
      avatar: "YU",
      isOwn: true,
    },
    {
      id: 3,
      user: "Sarah Chen",
      content: "Love the new dark theme! The purple accents look incredible ✨",
      timestamp: "2:36 PM",
      avatar: "SC",
      isOwn: false,
    },
    {
      id: 4,
      user: "Mike Davis",
      content: "Who wants to join a voice chat? We're discussing the new features",
      timestamp: "2:37 PM",
      avatar: "MD",
      isOwn: false,
    },
  ]

  return (
    <div className={cn("flex-1 flex flex-col h-full bg-background", className)}>
      {/* Chat Header */}
      <div className="p-4 border-b border-wave-border bg-surface-primary">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Hash className="w-5 h-5 text-wave-primary" />
              <h2 className="text-lg font-semibold text-text-primary">general</h2>
            </div>
            <div className="w-1 h-6 bg-wave-border"></div>
            <p className="text-sm text-text-secondary">Общий чат для всех участников</p>
          </div>
          
          <div className="flex items-center gap-2">
            <WaveButton variant="ghost" size="icon">
              <Phone className="w-4 h-4" />
            </WaveButton>
            <WaveButton variant="ghost" size="icon">
              <Video className="w-4 h-4" />
            </WaveButton>
            <WaveButton variant="ghost" size="icon">
              <MoreVertical className="w-4 h-4" />
            </WaveButton>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex gap-3 wave-slide",
              message.isOwn && "flex-row-reverse"
            )}
          >
            <div className="flex-shrink-0">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold",
                message.isOwn 
                  ? "bg-wave-gradient text-wave-primary-foreground" 
                  : "bg-surface-tertiary text-text-primary"
              )}>
                {message.avatar}
              </div>
            </div>
            
            <div className={cn(
              "max-w-xs lg:max-w-md",
              message.isOwn && "text-right"
            )}>
              {!message.isOwn && (
                <p className="text-sm font-medium text-text-primary mb-1">{message.user}</p>
              )}
              
              <WaveCard
                variant={message.isOwn ? "elevated" : "default"}
                size="sm"
                className={cn(
                  "transition-all duration-200 hover:shadow-surface",
                  message.isOwn && "bg-wave-primary/10 border-wave-primary/20"
                )}
              >
                <p className="text-sm text-text-primary">{message.content}</p>
              </WaveCard>
              
              <p className="text-xs text-text-muted mt-1">{message.timestamp}</p>
            </div>
          </div>
        ))}

        {/* System Message */}
        <div className="flex justify-center my-6">
          <WaveCard variant="transparent" size="sm" className="max-w-md text-center">
            <p className="text-xs text-text-muted">
              <span className="font-medium text-wave-primary">Sarah Chen</span> присоединилась к серверу
            </p>
          </WaveCard>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-wave-border bg-surface-primary">
        <div className="flex items-end gap-3">
          <WaveButton variant="ghost" size="icon">
            <Paperclip className="w-4 h-4" />
          </WaveButton>
          
          <div className="flex-1 relative">
            <textarea
              placeholder="Написать сообщение в #general..."
              className="w-full bg-surface-secondary border border-wave-border rounded-lg px-4 py-3 pr-12 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-wave-ring focus:border-wave-primary transition-all resize-none min-h-[44px] max-h-32"
              rows={1}
            />
            
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <WaveButton variant="ghost" size="icon">
                <Smile className="w-4 h-4" />
              </WaveButton>
            </div>
          </div>
          
          <WaveButton variant="wave" size="icon">
            <Send className="w-4 h-4" />
          </WaveButton>
        </div>
        
        <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
          <p>Используйте <span className="bg-surface-tertiary px-1 rounded">@username</span> для упоминания</p>
          <p>Enter для отправки • Shift+Enter для новой строки</p>
        </div>
      </div>
    </div>
  )
}