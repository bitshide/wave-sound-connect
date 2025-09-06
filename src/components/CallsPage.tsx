import { Phone, PhoneCall, PhoneIncoming, PhoneMissed, PhoneOutgoing, Video } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { WaveCard } from "./WaveCard"

export function CallsPage() {
  const calls = [
    {
      id: 1,
      name: "Alex Johnson",
      type: "incoming",
      status: "answered",
      time: "2 мин назад",
      duration: "5:23",
      isVideo: false
    },
    {
      id: 2,
      name: "Sarah Chen",
      type: "outgoing",
      status: "answered",
      time: "1 час назад",
      duration: "12:45",
      isVideo: true
    },
    {
      id: 3,
      name: "Mike Davis",
      type: "incoming",
      status: "missed",
      time: "3 часа назад",
      duration: null,
      isVideo: false
    },
    {
      id: 4,
      name: "Gaming Hub",
      type: "outgoing",
      status: "answered",
      time: "Вчера",
      duration: "45:12",
      isVideo: false
    },
    {
      id: 5,
      name: "Tech Talk",
      type: "incoming",
      status: "declined",
      time: "2 дня назад",
      duration: null,
      isVideo: true
    }
  ]

  const getCallIcon = (type: string, status: string) => {
    if (status === "missed") return <PhoneMissed className="w-4 h-4 text-wave-error" />
    if (type === "incoming") return <PhoneIncoming className="w-4 h-4 text-wave-success" />
    return <PhoneOutgoing className="w-4 h-4 text-wave-primary" />
  }

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold wave-text-gradient">Звонки</h1>
          <WaveButton variant="wave">
            <PhoneCall className="w-4 h-4 mr-2" />
            Новый звонок
          </WaveButton>
        </div>

        <div className="space-y-2">
          {calls.map((call) => (
            <WaveCard key={call.id} variant="transparent" size="sm" className="hover:bg-surface-tertiary transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  {getCallIcon(call.type, call.status)}
                  {call.isVideo && <Video className="w-3 h-3 text-text-muted" />}
                </div>

                <div className="w-10 h-10 bg-surface-tertiary rounded-full flex items-center justify-center text-sm font-medium text-text-primary">
                  {call.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-text-primary">{call.name}</p>
                    {call.isVideo && <Video className="w-3 h-3 text-text-muted" />}
                  </div>
                  <p className="text-xs text-text-muted">
                    {call.duration ? `${call.duration} • ${call.time}` : call.time}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <WaveButton variant="ghost" size="icon">
                    <Phone className="w-4 h-4" />
                  </WaveButton>
                  <WaveButton variant="ghost" size="icon">
                    <Video className="w-4 h-4" />
                  </WaveButton>
                </div>
              </div>
            </WaveCard>
          ))}
        </div>
      </div>
    </div>
  )
}