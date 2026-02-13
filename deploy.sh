#!/bin/bash

# Цвета для вывода
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔨 Сборка проекта...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Ошибка при сборке проекта${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Сборка завершена${NC}"
echo ""
echo -e "${BLUE}📦 Файлы готовы к загрузке на сервер${NC}"
echo -e "Папка: ${GREEN}dist/${NC}"
echo ""
echo -e "${BLUE}📋 Следующие шаги:${NC}"
echo "1. Загрузите содержимое папки 'dist' в директорию '/deals/' на вашем сервере"
echo "2. Убедитесь, что веб-сервер настроен правильно (см. DEPLOY_CUSTOM_DOMAIN.md)"
echo ""
echo -e "${BLUE}🌐 После загрузки сайт будет доступен по адресу:${NC}"
echo -e "${GREEN}https://ic-group.kz/deals${NC}"
echo ""
echo -e "${BLUE}💡 Для автоматической загрузки через SSH/SFTP:${NC}"
echo "Раскомментируйте строки ниже и добавьте данные вашего сервера"
echo ""

# Раскомментируйте и настройте для автоматической загрузки:
# SERVER_USER="your_username"
# SERVER_HOST="ic-group.kz"
# SERVER_PATH="/var/www/ic-group.kz/deals/"
# 
# echo -e "${BLUE}📤 Загрузка файлов на сервер...${NC}"
# rsync -avz --delete dist/ ${SERVER_USER}@${SERVER_HOST}:${SERVER_PATH}
# 
# if [ $? -eq 0 ]; then
#     echo -e "${GREEN}✅ Деплой завершен успешно!${NC}"
#     echo -e "${GREEN}🌐 Сайт доступен: https://ic-group.kz/deals${NC}"
# else
#     echo -e "${RED}❌ Ошибка при загрузке файлов${NC}"
#     exit 1
# fi
