# Deployment Instructions for Traditional Hosting Services

This guide will help you deploy your Schamz Gaming React application to traditional hosting services like SiteGround, OnlyDomains, and other cPanel-based hosts.

## What's Been Prepared

✅ **Vite Configuration Updated**: The app is now configured with relative paths for traditional hosting
✅ **Production Build Created**: Optimized files are in the `dist` folder
✅ **SPA Routing Support**: `.htaccess` file created for proper React Router functionality
✅ **Deployment Package**: `schamz-gaming-deployment.zip` ready for upload

## Deployment Steps

### For SiteGround.com

1. **Login to SiteGround**
   - Go to [siteground.com](https://siteground.com) and login to your account
   - Click on "My Accounts" and then "Go to cPanel"

2. **Access File Manager**
   - In cPanel, scroll down to the "Files" section
   - Click on "File Manager"

3. **Navigate to Public Directory**
   - Open the `public_html` folder (this is where your website files go)
   - If you have an existing website, you may want to backup or remove old files first

4. **Upload Your Files**
   - Click the "Upload" button in File Manager
   - Select the `schamz-gaming-deployment.zip` file from your computer
   - Wait for the upload to complete

5. **Extract Files**
   - Right-click on the uploaded zip file
   - Select "Extract" from the context menu
   - The files will be extracted to the current directory

6. **Clean Up**
   - Delete the zip file after extraction to save space
   - Your website should now be live at your domain!

### For OnlyDomains and Other cPanel Hosts

The process is similar for most cPanel-based hosting providers:

1. **Login to Your Hosting Control Panel**
   - Access your hosting account's control panel (usually cPanel)

2. **File Manager Access**
   - Look for "File Manager" or "Files" section
   - Navigate to your domain's public directory (usually `public_html` or `www`)

3. **Upload and Extract**
   - Upload the `schamz-gaming-deployment.zip` file
   - Extract it in the public directory
   - Remove the zip file after extraction

### Alternative: FTP Upload

If you prefer using FTP:

1. **Get FTP Credentials**
   - In cPanel, go to "FTP Accounts"
   - Create a new FTP account or use existing credentials

2. **Use FTP Client**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your server using the FTP credentials
   - Navigate to the `public_html` directory

3. **Upload Files**
   - Extract the `schamz-gaming-deployment.zip` locally first
   - Upload all contents of the `dist` folder to `public_html`
   - Make sure the `.htaccess` file is uploaded (it might be hidden)

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