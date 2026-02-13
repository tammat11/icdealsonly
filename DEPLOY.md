# Deployment Guide

## 1. Fix Permissions (Required)
It seems there are some permission issues with your npm cache. Please run the following command in your terminal to fix them:
```bash
sudo chown -R 501:20 "/Users/tammat/.npm"
```
(You may need to enter your system password).

## 2. Install Dependencies
After fixing permissions, install the project dependencies:
```bash
npm install
```

## 3. Build for Production
Run the build command to generate the production files:
```bash
npm run build
```
This will create a `dist` folder containing your optimized website.

## 4. Deploy
You can deploy the contents of the `dist` folder to any static hosting service:
- **Vercel**: Run `npx vercel`
- **Netlify**: Drag and drop the `dist` folder to Netlify Drop
- **FTP/SFTP**: Upload the contents of `dist` to your web server (e.g., `public_html`)

## Environment Variables
Make sure your production environment has the `VITE_BITRIX_WEBHOOK_URL` set securely.
