# Deployment Instructions for OnlyDomains + SiteGround Hosting

This comprehensive guide will help you deploy your Schamz Gaming React application using a domain from OnlyDomains.com hosted on SiteGround servers.

## What's Been Prepared

✅ **Vite Configuration Updated**: The app is now configured with relative paths for traditional hosting  
✅ **Production Build Ready**: Optimized files will be created in the `dist` folder  
✅ **SPA Routing Support**: `.htaccess` file created for proper React Router functionality  
✅ **Performance Optimization**: Compression and caching rules included  
✅ **Security Headers**: Basic security configurations added  

## Complete Setup Process

### Phase 1: Domain Connection (OnlyDomains → SiteGround)

**Step 1: Get SiteGround Nameservers**
1. Login to your SiteGround account
2. Go to **Websites** section
3. Click the **kebab menu** (three dots) next to your hosting account
4. Select **Website Settings** → **Server Details**
5. Note down the nameservers (typically):
   - `ns1.siteground.net`
   - `ns2.siteground.net`

**Step 2: Update DNS at OnlyDomains**
1. Login to your OnlyDomains.com account
2. Go to **Domains** → **My Domains**
3. Click on your domain name
4. Select the **DNS Settings** tab
5. Choose **Delegate to Your Name Servers**
6. Enter the SiteGround nameservers:
   - Add `ns1.siteground.net`
   - Click **Add** after entering each nameserver
   - Add `ns2.siteground.net`
   - Click **Add**
7. Click **Delegate to Your Name Servers** to confirm
8. Wait 24-72 hours for DNS propagation

### Phase 2: Website Deployment on SiteGround

**Step 1: Build Your Application**
```bash
npm run build
```
This creates optimized files in the `dist` folder.

**Step 2: Access SiteGround File Manager**
1. Login to your SiteGround account
2. Go to **Websites** and select your site
3. Click **Site Tools**
4. Navigate to **Files** → **File Manager**

**Step 3: Upload Website Files**
1. Navigate to the `public_html` directory
2. If there are existing files, backup or remove them
3. Upload the following files and folders from your local `dist` directory to `public_html`:

**EXACT FILES TO UPLOAD:**
```
From: C:\Users\Rasse\Desktop\Work\Schamz\Schamz-Gaming\Website\schamz-gaming\dist\
To: public_html/

Required Files:
├── index.html                    → public_html/index.html
├── .htaccess                     → public_html/.htaccess
├── vite.svg                      → public_html/vite.svg
├── Certified Icon.svg            → public_html/Certified Icon.svg
├── Schamz-Gaming-Logo.svg        → public_html/Schamz-Gaming-Logo.svg
├── Schamz-Gaming-icon.svg        → public_html/Schamz-Gaming-icon.svg
├── assets/                       → public_html/assets/
│   ├── index-[hash].css          → public_html/assets/index-[hash].css
│   └── index-[hash].js           → public_html/assets/index-[hash].js
└── images/                       → public_html/images/
    ├── 7507_ho_00_p_2048x1536-1-1.png
    ├── abstract-bg-element-1.svg
    ├── abstract-bg-element-2.svg
    ├── bbb562e9-7515-4cfe-9fb0-75074c3e37d4.png
    ├── cof.png
    ├── ethereal-legends-cover.svg
    ├── neogenesis.png
    ├── neon-velocity-cover.svg
    ├── quantum-shift-cover.svg
    ├── shadow-realm-cover.svg
    ├── spinix/ (entire folder)
    ├── stellar-conquest-cover.svg
    ├── xontainer.png
    └── [all other image files]
```

**IMPORTANT:** 
- Upload ALL contents of the `dist` folder (not the folder itself)
- The `.htaccess` file is CRITICAL - ensure it's uploaded to the root of `public_html`
- Maintain the exact folder structure as shown above
4. Ensure all files are uploaded to the root of `public_html`

**Alternative: FTP Upload Method**

If you prefer using FTP client (FileZilla, WinSCP, etc.):

**Step 1: Get FTP Credentials**
1. In SiteGround Site Tools, go to **Site** → **FTP Accounts**
2. Note down your FTP credentials:
   - **Host**: Your domain or server IP
   - **Username**: Your FTP username
   - **Password**: Your FTP password
   - **Port**: 21 (standard FTP) or 22 (SFTP)

**Step 2: Connect and Upload**
1. Open your FTP client and connect using the credentials
2. Navigate to the `public_html` directory on the server
3. On your local computer, navigate to:
   ```
   C:\Users\Rasse\Desktop\Work\Schamz\Schamz-Gaming\Website\schamz-gaming\dist\
   ```
4. **Upload these exact files and folders:**
   ```
   LOCAL PATH → SERVER PATH
   
   dist/index.html                    → public_html/index.html
   dist/.htaccess                     → public_html/.htaccess
   dist/vite.svg                      → public_html/vite.svg
   dist/Certified Icon.svg            → public_html/Certified Icon.svg
   dist/Schamz-Gaming-Logo.svg        → public_html/Schamz-Gaming-Logo.svg
   dist/Schamz-Gaming-icon.svg        → public_html/Schamz-Gaming-icon.svg
   dist/assets/ (entire folder)       → public_html/assets/
   dist/images/ (entire folder)       → public_html/images/
   ```

**Step 3: Verify Upload**
1. Ensure all files are in the root of `public_html` (not in a subfolder)
2. Check that the `.htaccess` file is present (it may be hidden)
3. Verify the `assets` and `images` folders maintain their structure

### Phase 3: Verification and Testing

**Step 1: Check DNS Propagation**
1. Use online tools like [whatsmydns.net](https://whatsmydns.net) to check DNS propagation
2. Enter your domain name and check if it resolves to SiteGround servers
3. Wait for full propagation (up to 72 hours)

**Step 2: Test Your Website**
1. Visit your domain in a web browser
2. Test all navigation links and routes
3. Verify that refreshing pages works correctly (React Router test)
4. Check that all images and assets load properly

**Step 3: Enable SSL Certificate**
1. In SiteGround Site Tools, go to **Security** → **SSL Manager**
2. Select **Let's Encrypt** for free SSL
3. Enable SSL for your domain
4. Force HTTPS redirect if desired

## Important Configuration Details

### DNS Nameservers for SiteGround <mcreference link="https://www.siteground.com/tutorials/getting-started/point-domain-siteground-servers/" index="1">1</mcreference>
- **Primary**: `ns1.siteground.net`
- **Secondary**: `ns2.siteground.net`

### OnlyDomains DNS Management <mcreference link="https://support.onlydomains.com/hc/en-gb/articles/4406251623057-How-do-I-change-my-Name-Servers-delegate" index="1">1</mcreference>
- Access: **Domains** → **My Domains** → **DNS Settings**
- Option: **Delegate to Your Name Servers**
- Propagation: 24-48 hours typical, up to 72 hours maximum

### Required Files for Deployment <mcreference link="https://stackoverflow.com/questions/48431170/how-to-deploy-a-create-react-app-to-a-web-host-ex-siteground" index="1">1</mcreference>
- `index.html` (main entry point)
- `assets/` folder (all CSS, JS, images)
- `.htaccess` (React Router support and performance)

## Troubleshooting Guide

### Common Issues and Solutions

**Issue: Blank white page after deployment**
- **Cause**: Missing files or incorrect paths
- **Solution**: 
  - Verify all `dist` folder contents are uploaded
  - Check that `index.html` is in the root of `public_html`
  - Ensure `.htaccess` file is present

**Issue: 404 errors when refreshing pages** <mcreference link="https://mckenzie-company.com/tech-blog/how-to-host-react-on-siteground-or-any-other-traditional-hosting/" index="2">2</mcreference>
- **Cause**: Missing or incorrect `.htaccess` configuration
- **Solution**:
  - Verify `.htaccess` file is in `public_html` root
  - Check that mod_rewrite is enabled on server
  - Contact SiteGround support if needed

**Issue: Assets not loading (CSS/JS/Images)**
- **Cause**: Incorrect file paths or missing files
- **Solution**:
  - Ensure all files from `assets/` folder are uploaded
  - Check file permissions (644 for files, 755 for folders)
  - Verify relative paths in `vite.config.js`

**Issue: Domain not pointing to SiteGround**
- **Cause**: DNS not fully propagated or incorrect nameservers
- **Solution**:
  - Wait longer for DNS propagation (up to 72 hours)
  - Double-check nameservers in OnlyDomains
  - Use DNS checker tools to verify propagation

### Performance Optimization

The included `.htaccess` file provides:
- **Gzip Compression**: Reduces file sizes for faster loading
- **Browser Caching**: Caches static assets for better performance  
- **Security Headers**: Basic protection against common attacks

## Quick Reference: Files to Upload

### Source Directory: `dist/`
### Target Directory: `public_html/` (on SiteGround server)

#### Complete File Mapping:

**Root Files:**
- `dist/index.html` → `public_html/index.html`
- `dist/vite.svg` → `public_html/vite.svg`
- `dist/sitemap.xml` → `public_html/sitemap.xml` (SEO)
- `dist/robots.txt` → `public_html/robots.txt` (SEO)
- `.htaccess` → `public_html/.htaccess` (from project root)

**Assets Folder:**
- `dist/assets/` → `public_html/assets/`
  - All CSS files (e.g., `index-mW9WgGT2.css`)
  - All JavaScript files (e.g., `index-rp_noKNk.js`)

**Images Folder:**
- `dist/images/` → `public_html/images/`
  - All game images and assets
  - Logo files
  - Background images

### Complete File Mapping
```
LOCAL FILE/FOLDER                                    → SERVER LOCATION
────────────────────────────────────────────────────────────────────────────
dist/index.html                                     → public_html/index.html
dist/.htaccess                                       → public_html/.htaccess
dist/vite.svg                                        → public_html/vite.svg
dist/Certified Icon.svg                              → public_html/Certified Icon.svg
dist/Schamz-Gaming-Logo.svg                          → public_html/Schamz-Gaming-Logo.svg
dist/Schamz-Gaming-icon.svg                          → public_html/Schamz-Gaming-icon.svg

dist/assets/index-[hash].css                         → public_html/assets/index-[hash].css
dist/assets/index-[hash].js                          → public_html/assets/index-[hash].js

dist/images/7507_ho_00_p_2048x1536-1-1.png          → public_html/images/7507_ho_00_p_2048x1536-1-1.png
dist/images/abstract-bg-element-1.svg                → public_html/images/abstract-bg-element-1.svg
dist/images/abstract-bg-element-2.svg                → public_html/images/abstract-bg-element-2.svg
dist/images/bbb562e9-7515-4cfe-9fb0-75074c3e37d4.png → public_html/images/bbb562e9-7515-4cfe-9fb0-75074c3e37d4.png
dist/images/cof.png                                  → public_html/images/cof.png
dist/images/ethereal-legends-cover.svg               → public_html/images/ethereal-legends-cover.svg
dist/images/neogenesis.png                           → public_html/images/neogenesis.png
dist/images/neon-velocity-cover.svg                  → public_html/images/neon-velocity-cover.svg
dist/images/quantum-shift-cover.svg                  → public_html/images/quantum-shift-cover.svg
dist/images/shadow-realm-cover.svg                   → public_html/images/shadow-realm-cover.svg
dist/images/spinix/ (entire folder + contents)       → public_html/images/spinix/
dist/images/stellar-conquest-cover.svg               → public_html/images/stellar-conquest-cover.svg
dist/images/xontainer.png                            → public_html/images/xontainer.png
```

### Critical Notes
- **NEVER upload the `dist` folder itself** - only its contents
- **Include SEO Files**: Don't forget `sitemap.xml` and `robots.txt` for search engine optimization
- **The `.htaccess` file is MANDATORY** - without it, React Router won't work
- **Maintain exact folder structure** - especially `assets/` and `images/` folders
- **File names are case-sensitive** - upload exactly as shown

## Important Notes

### Domain Configuration
- If deploying to a subdomain or subfolder, you may need to update the `base` path in `vite.config.js`
- For subdirectories, change `base: './'` to `base: '/your-folder-name/'`

### SSL Certificate
- Most hosting providers offer free SSL certificates <mcreference link="https://stackoverflow.com/questions/48431170/how-to-deploy-a-create-react-app-to-a-web-host-ex-siteground" index="1">1</mcreference>
- Enable SSL in your hosting control panel for HTTPS support

### Performance Optimization
- The `.htaccess` file includes compression and caching rules <mcreference link="https://www.linkedin.com/pulse/simple-guide-deploying-your-vite-react-app-cpanel-shishir-c4esc" index="4">4</mcreference>
- These will improve your website's loading speed

### Troubleshooting

**If your site shows a blank page:**
- Check that all files were uploaded correctly
- Ensure the `.htaccess` file is present
- Verify that your hosting supports `.htaccess` files

**If routing doesn't work (404 errors on refresh):**
- Confirm the `.htaccess` file is in the root directory
- Check that mod_rewrite is enabled on your server <mcreference link="https://www.linkedin.com/pulse/simple-guide-deploying-your-vite-react-app-cpanel-shishir-c4esc" index="4">4</mcreference>

**If images or assets don't load:**
- Verify all files from the `dist` folder were uploaded
- Check file permissions (usually 644 for files, 755 for folders)

## Files Included in Deployment Package

- `index.html` - Main HTML file
- `assets/` - CSS, JavaScript, and other static assets
- `.htaccess` - Server configuration for SPA routing and performance

## Support

If you encounter issues:
1. Check your hosting provider's documentation
2. Contact their support team for server-specific configuration help
3. Verify that your hosting plan supports static websites and `.htaccess` files

Your Schamz Gaming website is now ready for traditional hosting deployment! 🚀