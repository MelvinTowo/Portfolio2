# 🚀 AWS Amplify Deployment Guide

## Prerequisites
- AWS Account
- GitHub repository with your portfolio code
- Environment variables ready

## Step-by-Step Deployment

### 1. **Push to GitHub**
```bash
git add .
git commit -m "Portfolio v1.0 - Ready for production"
git push origin main
```

### 2. **AWS Amplify Setup**
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" > "Host web app"
3. Select "GitHub" as your Git provider
4. Authorize AWS Amplify to access your repository
5. Select your portfolio repository (`Portfolio2`)
6. Choose the `main` branch

### 3. **Build Configuration**
Amplify should auto-detect Next.js. Verify these settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 4. **Environment Variables**
In Amplify console, go to App settings > Environment variables:

```
EMAIL_USER = your-email@gmail.com
EMAIL_PASS = your-app-password  
NOTIFICATION_EMAIL = your-email@gmail.com
```

### 5. **Deploy**
- Click "Save and deploy"
- Wait for deployment (usually 2-5 minutes)
- Your portfolio will be live at: `https://[app-id].amplifyapp.com`

### 6. **Custom Domain (Optional)**
1. In Amplify console, go to Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## 🔧 Build Settings

### Node.js Version
- Set to Node.js 18.x in Amplify build settings

### Build Commands
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **Install command**: `npm ci`

## 📧 Gmail App Password Setup

For email notifications to work:

1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account settings > Security > App passwords
3. Generate a new app password for "Mail"
4. Use this password (not your regular Gmail password) in `EMAIL_PASS`

## 🎯 Post-Deployment Checklist

- [ ] Portfolio loads correctly
- [ ] All animations work smoothly  
- [ ] Mobile responsiveness verified
- [ ] Email notifications functional
- [ ] All images loading properly
- [ ] Performance metrics acceptable (Lighthouse 90+)

## 🔄 Continuous Deployment

Once set up, every push to your `main` branch will automatically trigger a new deployment.

## 🚨 Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (use 18.x)
2. **Images not loading**: Verify image paths in `/public/assets/`
3. **Fonts not loading**: Ensure Google Fonts are accessible
4. **Email not working**: Verify environment variables and Gmail app password

---

**Next Steps**: After successful deployment, consider adding:
- Google Analytics
- Custom domain
- CMS integration (Sanity/Strapi)
- Additional projects