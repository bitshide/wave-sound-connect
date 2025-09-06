import { User, Bell, Palette, Globe, Shield, Download, LogOut, Edit } from "lucide-react"
import { WaveButton } from "./WaveButton"
import { WaveCard } from "./WaveCard"
import { useState } from "react"

interface SettingsPageProps {
  onThemeChange: (theme: 'classic' | 'dark' | 'light') => void
  currentTheme: 'classic' | 'dark' | 'light'
}

export function SettingsPage({ onThemeChange, currentTheme }: SettingsPageProps) {
  const [userName, setUserName] = useState("Your User")
  const [isEditingName, setIsEditingName] = useState(false)
  const [tempName, setTempName] = useState(userName)

  const saveName = () => {
    setUserName(tempName)
    setIsEditingName(false)
  }

  const themes = [
    { id: 'classic' as const, name: 'Классическая', description: 'Темно-фиолетовая тема' },
    { id: 'dark' as const, name: 'Черная', description: 'Черная тема с фиолетовыми акцентами' },
    { id: 'light' as const, name: 'Светлая', description: 'Светлая тема' },
  ]

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold wave-text-gradient mb-6">Настройки</h1>

        {/* Profile Settings */}
        <WaveCard variant="elevated" className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Профиль
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-wave-gradient rounded-full flex items-center justify-center text-xl font-bold text-wave-primary-foreground">
                {userName.split(' ').map(n => n[0]).join('')}
              </div>
              
              <div className="flex-1">
                {isEditingName ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      className="flex-1 bg-surface-secondary border border-wave-border rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-wave-ring"
                      onKeyPress={(e) => e.key === 'Enter' && saveName()}
                      autoFocus
                    />
                    <WaveButton variant="wave" size="sm" onClick={saveName}>
                      Сохранить
                    </WaveButton>
                    <WaveButton variant="ghost" size="sm" onClick={() => setIsEditingName(false)}>
                      Отмена
                    </WaveButton>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="font-medium text-text-primary">{userName}</p>
                      <p className="text-sm text-text-muted">Онлайн</p>
                    </div>
                    <WaveButton 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => {
                        setTempName(userName)
                        setIsEditingName(true)
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </WaveButton>
                  </div>
                )}
              </div>
            </div>
          </div>
        </WaveCard>

        {/* Theme Settings */}
        <WaveCard variant="elevated" className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Тема приложения
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <div
                key={theme.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  currentTheme === theme.id 
                    ? 'border-wave-primary bg-wave-primary/10' 
                    : 'border-wave-border hover:border-wave-primary/50'
                }`}
                onClick={() => onThemeChange(theme.id)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-4 h-4 rounded-full ${
                    theme.id === 'classic' ? 'bg-wave-primary' :
                    theme.id === 'dark' ? 'bg-gray-900' : 'bg-gray-200'
                  }`} />
                  <h3 className="font-medium text-text-primary">{theme.name}</h3>
                </div>
                <p className="text-sm text-text-muted">{theme.description}</p>
              </div>
            ))}
          </div>
        </WaveCard>

        {/* Notifications */}
        <WaveCard variant="elevated" className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Уведомления
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-text-primary">Уведомления о сообщениях</p>
                <p className="text-sm text-text-muted">Получать уведомления о новых сообщениях</p>
              </div>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-text-primary">Звуки уведомлений</p>
                <p className="text-sm text-text-muted">Воспроизводить звуки при получении уведомлений</p>
              </div>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
          </div>
        </WaveCard>

        {/* Language */}
        <WaveCard variant="elevated" className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Язык
          </h2>
          
          <select className="w-full bg-surface-secondary border border-wave-border rounded-lg px-3 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-wave-ring">
            <option value="ru">Русский</option>
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </select>
        </WaveCard>

        {/* Privacy & Security */}
        <WaveCard variant="elevated" className="mb-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Приватность и безопасность
          </h2>
          
          <div className="space-y-3">
            <WaveButton variant="outline" className="w-full justify-start">
              <Shield className="w-4 h-4 mr-2" />
              Двухфакторная аутентификация
            </WaveButton>
            
            <WaveButton variant="outline" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Экспорт данных
            </WaveButton>
          </div>
        </WaveCard>

        {/* Logout */}
        <WaveCard variant="elevated">
          <WaveButton variant="danger" className="w-full">
            <LogOut className="w-4 h-4 mr-2" />
            Выйти из аккаунта
          </WaveButton>
        </WaveCard>
      </div>
    </div>
  )
}