# 🚀 Деплой на Vercel с доменом ic-group.kz/deals

## ✅ Что уже готово:
- ✅ Проект настроен для работы на `/deals/`
- ✅ Создан `vercel.json` с правильной конфигурацией
- ✅ Код загружен на GitHub: https://github.com/tammat11/icdealsonly

---

## 📋 Пошаговая инструкция:

### Шаг 1: Создайте аккаунт на Vercel

1. Перейдите на https://vercel.com
2. Нажмите **Sign Up**
3. Выберите **Continue with GitHub**
4. Авторизуйтесь через GitHub

### Шаг 2: Импортируйте проект

1. На главной странице Vercel нажмите **Add New** → **Project**
2. Найдите репозиторий **tammat11/icdealsonly**
3. Нажмите **Import**

### Шаг 3: Настройте проект

На странице настройки проекта:

#### Build Settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables:
Нажмите **Add Environment Variable** и добавьте:

| Name | Value |
|------|-------|
| `VITE_BITRIX_WEBHOOK_URL` | `ваш_webhook_url` |

**Важно:** Вставьте ваш реальный webhook URL из Bitrix24!

#### Root Directory:
Оставьте пустым (используется корень проекта)

### Шаг 4: Деплой

1. Нажмите **Deploy**
2. Дождитесь завершения сборки (обычно 1-2 минуты)
3. После успешного деплоя вы получите URL вида: `https://icdealsonly.vercel.app`

---

## 🌐 Настройка кастомного домена ic-group.kz/deals

### Вариант А: Использовать поддомен (Рекомендуется)

Это проще и надежнее, чем использовать поддиректорию.

#### 1. Настройте DNS

В панели управления доменом `ic-group.kz` добавьте CNAME запись:

```
Type: CNAME
Name: deals
Value: cname.vercel-dns.com
TTL: Auto
```

#### 2. Добавьте домен в Vercel

1. Откройте ваш проект на Vercel
2. Перейдите в **Settings** → **Domains**
3. Нажмите **Add**
4. Введите: `deals.ic-group.kz`
5. Нажмите **Add**

#### 3. Обновите базовый путь

Измените `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',  // Для поддомена используем корневой путь
})
```

#### 4. Обновите vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/$1"
    }
  ]
}
```

Ваш сайт будет доступен по адресу: **https://deals.ic-group.kz**

---

### Вариант Б: Использовать поддиректорию /deals (Сложнее)

Если вам обязательно нужна именно поддиректория `ic-group.kz/deals`:

#### 1. Настройте основной сайт на Vercel

Основной сайт `ic-group.kz` должен быть развернут на Vercel как отдельный проект.

#### 2. Настройте Rewrite Rules

В проекте основного сайта (`ic-group.kz`) добавьте в `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/deals/:path*",
      "destination": "https://icdealsonly.vercel.app/deals/:path*"
    }
  ]
}
```

Это перенаправит все запросы к `/deals/*` на ваш проект.

#### 3. Текущая конфигурация уже готова

Ваш проект уже настроен с `base: '/deals/'` в `vite.config.ts`, так что ничего менять не нужно.

---

## 🔄 Автоматические обновления

После настройки каждый `git push` в ветку `main` будет автоматически:
1. Запускать сборку на Vercel
2. Деплоить новую версию
3. Обновлять сайт

---

## 🔐 Безопасность переменных окружения

### Проверка переменных:

1. Откройте проект на Vercel
2. Перейдите в **Settings** → **Environment Variables**
3. Убедитесь, что `VITE_BITRIX_WEBHOOK_URL` установлена

### Обновление переменных:

Если нужно изменить webhook URL:
1. Откройте **Settings** → **Environment Variables**
2. Найдите `VITE_BITRIX_WEBHOOK_URL`
3. Нажмите **Edit** → введите новое значение → **Save**
4. Перейдите в **Deployments**
5. Нажмите **Redeploy** на последнем деплое

---

## 📊 Мониторинг и логи

### Просмотр логов сборки:

1. Откройте проект на Vercel
2. Перейдите в **Deployments**
3. Кликните на нужный деплой
4. Просмотрите **Build Logs** и **Function Logs**

### Аналитика:

Vercel предоставляет бесплатную аналитику:
- Перейдите в **Analytics** для просмотра трафика
- Смотрите производительность в **Speed Insights**

---

## 🎯 Рекомендуемая конфигурация

Для вашего случая я рекомендую **Вариант А (поддомен)**:

✅ **Преимущества:**
- Проще настроить
- Лучше для SEO
- Быстрее работает
- Проще управлять

❌ **Недостатки поддиректории:**
- Сложнее настроить
- Требует дополнительный проект для основного сайта
- Могут быть проблемы с маршрутизацией

**Итоговый URL:** `https://deals.ic-group.kz` вместо `https://ic-group.kz/deals`

---

## 🚀 Быстрый старт (Рекомендуемый путь)

1. **Зарегистрируйтесь на Vercel**: https://vercel.com
2. **Импортируйте проект**: https://github.com/tammat11/icdealsonly
3. **Добавьте переменную окружения**: `VITE_BITRIX_WEBHOOK_URL`
4. **Нажмите Deploy**
5. **Настройте DNS**: добавьте CNAME `deals` → `cname.vercel-dns.com`
6. **Добавьте домен в Vercel**: `deals.ic-group.kz`
7. **Обновите `vite.config.ts`**: измените `base: '/deals/'` на `base: '/'`
8. **Запушьте изменения**: `git push`

Готово! Сайт будет доступен по адресу: **https://deals.ic-group.kz**

---

## 📞 Поддержка

Если возникнут проблемы:
- Документация Vercel: https://vercel.com/docs
- Поддержка: https://vercel.com/support
- Проверьте логи сборки в Vercel Dashboard
