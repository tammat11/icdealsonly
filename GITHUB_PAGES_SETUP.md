# Настройка GitHub Pages для IC Deals Only

## ✅ Что уже сделано:
1. ✅ Код загружен на GitHub: https://github.com/tammat11/icdealsonly
2. ✅ Настроен GitHub Actions workflow для автоматического деплоя
3. ✅ `.env` файл добавлен в `.gitignore` (секретные данные защищены)

## 📋 Что нужно сделать:

### Шаг 1: Добавить Bitrix24 Webhook URL в GitHub Secrets

1. Откройте ваш репозиторий: https://github.com/tammat11/icdealsonly
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Введите:
   - **Name**: `VITE_BITRIX_WEBHOOK_URL`
   - **Value**: Ваш webhook URL из файла `.env` (начинается с `https://tootopbrass.bitrix24.kz/rest/...`)
5. Нажмите **Add secret**

### Шаг 2: Включить GitHub Pages

1. В том же репозитории перейдите в **Settings** → **Pages**
2. В разделе **Source** выберите:
   - Source: **GitHub Actions**
3. Сохраните настройки

### Шаг 3: Запустить деплой

После настройки секрета и GitHub Pages:

1. Перейдите во вкладку **Actions** в вашем репозитории
2. Вы увидите workflow "Deploy to GitHub Pages"
3. Нажмите **Run workflow** → **Run workflow** (или просто дождитесь автоматического запуска)
4. Дождитесь завершения деплоя (обычно 2-3 минуты)

### Шаг 4: Проверить сайт

После успешного деплоя ваш сайт будет доступен по адресу:
**https://tammat11.github.io/icdealsonly/**

## 🔄 Автоматические обновления

Теперь каждый раз, когда вы пушите изменения в ветку `main`, сайт будет автоматически обновляться!

## 🛠️ Локальная разработка

Для работы локально:

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev

# Собрать для продакшена
npm run build
```

## ⚠️ Важно!

- Никогда не коммитьте файл `.env` в Git
- Webhook URL должен быть добавлен только в GitHub Secrets
- Если нужно изменить webhook URL, обновите его в GitHub Secrets
