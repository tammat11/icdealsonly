# Деплой на ic-group.kz/deals

## 🎯 Цель
Разместить сайт на вашем домене `ic-group.kz` в поддиректории `/deals`

## 📦 Что уже настроено
✅ Vite сконфигурирован с базовым путем `/deals/`
✅ Проект готов к сборке для поддиректории

## 🚀 Варианты деплоя

### Вариант 1: Деплой на ваш хостинг (Рекомендуется)

#### Шаг 1: Соберите проект
```bash
npm run build
```

Это создаст папку `dist` с готовыми файлами.

#### Шаг 2: Загрузите файлы на сервер

Загрузите содержимое папки `dist` в директорию `/deals/` на вашем сервере:

**Структура на сервере должна быть:**
```
/var/www/ic-group.kz/
├── index.html          (главная страница ic-group.kz)
├── deals/              (ваш новый сайт)
│   ├── index.html
│   ├── assets/
│   └── ...
└── другие файлы...
```

#### Шаг 3: Настройте веб-сервер

**Для Nginx:**

Добавьте в конфигурацию сервера (обычно `/etc/nginx/sites-available/ic-group.kz`):

```nginx
server {
    listen 80;
    server_name ic-group.kz www.ic-group.kz;

    root /var/www/ic-group.kz;
    index index.html;

    # Основной сайт
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Поддиректория /deals
    location /deals {
        alias /var/www/ic-group.kz/deals;
        try_files $uri $uri/ /deals/index.html;
        
        # Для SPA (Single Page Application)
        location ~ ^/deals/(.*)$ {
            try_files $uri $uri/ /deals/index.html;
        }
    }

    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Затем перезапустите Nginx:
```bash
sudo nginx -t  # проверка конфигурации
sudo systemctl reload nginx
```

**Для Apache (.htaccess):**

Создайте файл `.htaccess` в папке `/deals/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /deals/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /deals/index.html [L]
</IfModule>
```

#### Шаг 4: Настройте переменные окружения

На вашем сервере создайте файл `.env` в корне проекта или настройте переменные окружения:

```bash
VITE_BITRIX_WEBHOOK_URL=ваш_webhook_url
```

**Важно:** Для production сборки переменные должны быть установлены **ДО** запуска `npm run build`.

---

### Вариант 2: GitHub Pages с кастомным доменом

Если вы хотите использовать GitHub Pages, но с вашим доменом:

#### Шаг 1: Настройте DNS

В панели управления доменом `ic-group.kz` добавьте CNAME запись:

```
deals.ic-group.kz → tammat11.github.io
```

Или используйте поддомен:
```
Type: CNAME
Name: deals
Value: tammat11.github.io
```

#### Шаг 2: Обновите GitHub Pages настройки

1. Откройте: https://github.com/tammat11/icdealsonly/settings/pages
2. В разделе **Custom domain** введите: `deals.ic-group.kz`
3. Сохраните

#### Шаг 3: Обновите vite.config.ts

Измените `base` на:
```typescript
base: '/',  // для кастомного домена
```

---

### Вариант 3: Использование поддиректории на хостинге через FTP/SFTP

#### Подключитесь к серверу:
```bash
# Через SFTP
sftp user@ic-group.kz

# Перейдите в нужную директорию
cd /var/www/ic-group.kz/

# Создайте папку deals (если её нет)
mkdir deals

# Загрузите файлы
put -r dist/* deals/
```

#### Или через FTP клиент (FileZilla, Cyberduck):
1. Подключитесь к `ic-group.kz`
2. Перейдите в корневую директорию сайта (обычно `public_html` или `www`)
3. Создайте папку `deals`
4. Загрузите все файлы из папки `dist` в `deals/`

---

## 🔄 Автоматизация деплоя

### Создание скрипта для автоматической загрузки

Создайте файл `deploy.sh`:

```bash
#!/bin/bash

echo "🔨 Building project..."
npm run build

echo "📦 Deploying to ic-group.kz/deals..."
rsync -avz --delete dist/ user@ic-group.kz:/var/www/ic-group.kz/deals/

echo "✅ Deployment complete!"
echo "🌐 Site available at: https://ic-group.kz/deals"
```

Сделайте его исполняемым:
```bash
chmod +x deploy.sh
```

Используйте:
```bash
./deploy.sh
```

---

## 🧪 Тестирование

После деплоя проверьте:

1. ✅ Главная страница: `https://ic-group.kz/deals`
2. ✅ Навигация работает корректно
3. ✅ Все изображения загружаются
4. ✅ Форма отправки работает (интеграция с Bitrix24)
5. ✅ Все ссылки ведут на правильные страницы

---

## ⚠️ Важные замечания

1. **Переменные окружения**: Убедитесь, что `VITE_BITRIX_WEBHOOK_URL` установлена перед сборкой
2. **HTTPS**: Рекомендуется использовать SSL сертификат (Let's Encrypt)
3. **Кэширование**: Настройте правильное кэширование для статических файлов
4. **Резервные копии**: Делайте бэкапы перед обновлением

---

## 🆘 Помощь

Если у вас возникли проблемы:

1. Проверьте логи веб-сервера
2. Убедитесь, что права доступа к файлам корректны (обычно 644 для файлов, 755 для папок)
3. Проверьте, что базовый путь в `vite.config.ts` соответствует структуре на сервере
