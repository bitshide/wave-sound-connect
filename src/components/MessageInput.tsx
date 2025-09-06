import { Send, Paperclip, Smile, Mic } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { useState } from "react"

export function MessageInput() {
  const [message, setMessage] = useState("")
  const [isRecording, setIsRecording] = useState(false)

  const handleSend = () => {
    if (message.trim()) {
      // Отправка сообщения
      setMessage("")
    }
  }

  const handleVoiceRecord = () => {
    setIsRecording(!isRecording)
    // Логика записи голосового сообщения
  }

  return (
    <>
      <div className="flex items-end gap-3">
        <WaveButton variant="ghost" size="icon">
          <Paperclip className="w-4 h-4" />
        </WaveButton>
        
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Написать сообщение в #general..."
            className="w-full bg-surface-secondary border border-wave-border rounded-lg px-4 py-3 pr-12 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-wave-ring focus:border-wave-primary transition-all resize-none min-h-[44px] max-h-32"
            rows={1}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />
          
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <WaveButton variant="ghost" size="icon">
              <Smile className="w-4 h-4" />
            </WaveButton>
          </div>
        </div>
        
        {message.trim() ? (
          <WaveButton variant="wave" size="icon" onClick={handleSend}>
            <Send className="w-4 h-4" />
          </WaveButton>
        ) : (
          <WaveButton 
            variant={isRecording ? "danger" : "ghost"} 
            size="icon" 
            onClick={handleVoiceRecord}
          >
            <Mic className="w-4 h-4" />
          </WaveButton>
        )}
      </div>
      
      <div className="flex items-center justify-between mt-3 text-xs text-text-muted">
        <p>Используйте <span className="bg-surface-tertiary px-1 rounded">@username</span> для упоминания</p>
        <p>Enter для отправки • Shift+Enter для новой строки</p>
      </div>
    </>
  )
}