# ⚡ Vercel: Быстрый деплой

## 🎯 Рекомендация: Используйте поддомен!

Вместо `ic-group.kz/deals` используйте `deals.ic-group.kz` - это проще и лучше!

---

## 🚀 5 простых шагов:

### 1️⃣ Зарегистрируйтесь на Vercel
- Перейдите: https://vercel.com
- Нажмите **Sign Up** → **Continue with GitHub**

### 2️⃣ Импортируйте проект
- Нажмите **Add New** → **Project**
- Выберите репозиторий **tammat11/icdealsonly**
- Нажмите **Import**

### 3️⃣ Добавьте переменную окружения
В разделе **Environment Variables** добавьте:

```
Name:  VITE_BITRIX_WEBHOOK_URL
Value: ваш_webhook_url_из_bitrix24
```

### 4️⃣ Нажмите Deploy
Дождитесь завершения (1-2 минуты)

### 5️⃣ Настройте домен

#### В панели управления доменом ic-group.kz:
Добавьте CNAME запись:
```
Type:  CNAME
Name:  deals
Value: cname.vercel-dns.com
```

#### В Vercel:
1. Откройте проект → **Settings** → **Domains**
2. Нажмите **Add**
3. Введите: `deals.ic-group.kz`
4. Нажмите **Add**

---

## ⚙️ Обновите конфигурацию для поддомена

Измените файл `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/',  // Изменить с '/deals/' на '/'
})
```

Закоммитьте и запушьте:
```bash
git add vite.config.ts
git commit -m "Update base path for subdomain"
git push
```

Vercel автоматически пересоберет проект!

---

## ✅ Готово!

Ваш сайт будет доступен по адресу:
### 🌐 **https://deals.ic-group.kz**

---

## 🔄 Автоматические обновления

Теперь при каждом `git push` сайт будет автоматически обновляться!

---

## 📚 Подробная инструкция

Смотрите файл **`VERCEL_DEPLOY.md`** для:
- Детальных инструкций
- Настройки поддиректории (если нужно именно `/deals`)
- Решения проблем
- Мониторинга и логов

---

## ⚠️ Важно!

1. **Webhook URL** должен быть добавлен в Environment Variables в Vercel
2. Для поддомена используйте `base: '/'` в `vite.config.ts`
3. Для поддиректории оставьте `base: '/deals/'`

---

## 🆘 Проблемы?

1. Проверьте логи сборки в Vercel Dashboard
2. Убедитесь, что переменная окружения установлена
3. Проверьте DNS настройки (может занять до 24 часов)
