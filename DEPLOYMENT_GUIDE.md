# Jaipur Cardiac Centre - Deployment Guide

## Quick Start: Deploy to Vercel

This guide will help you deploy your website to Vercel and connect it to your Spaceship domain with Cloudflare DNS.

### Step 1: Push to GitHub

1. Create a new repository on GitHub at [github.com/new](https://github.com/new)
   - Name: `jaipur-cardiac-centre`
   - Description: `Jaipur Cardiac Centre - Professional Cardiac Care Website`
   - Public or Private (your choice)

2. Push your code to GitHub:
```bash
cd /home/aniruddh/jaipur-cardiac-centre
git remote add origin https://github.com/YOUR_USERNAME/jaipur-cardiac-centre.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (or sign in if you have an account)
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Paste your GitHub repository URL and click **Import**
5. Click **Deploy** (default settings are fine)

Vercel will automatically build and deploy your site. You'll get a live URL like:
- `https://jaipur-cardiac-centre.vercel.app`

### Step 3: Set Up Contact Form (Formspree)

**Important:** The contact form needs to be configured to send emails.

1. Go to [formspree.io](https://formspree.io) and sign up
2. Click **"Create New Form"**
3. Choose **"Email Endpoint"** option
4. Enter email: `drraghven10@gmail.com`
5. Click **Create**
6. Copy your form ID (format: `f/xxxxxxxxxxxxx`)

Update your form endpoint in `app/contact/page.tsx`:

```typescript
// Line 31 - Replace the form ID
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with the ID you copied from Formspree.

### Step 4: Connect Your Spaceship Domain

#### Option A: Using Vercel Nameservers (Recommended)

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Click **"Add"** and enter your domain from Spaceship (e.g., `yourdomain.com`)
3. Copy the nameservers shown:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
   - `ns4.vercel-dns.com`

4. Go to your Spaceship control panel
5. Find your domain and click **"Manage DNS"** or **"Nameservers"**
6. Replace the nameservers with Vercel's nameservers from step 3
7. Wait 24-48 hours for DNS to propagate
8. Your domain will automatically point to Vercel

#### Option B: Using Cloudflare DNS (Better CDN & Security)

1. Go to [cloudflare.com](https://cloudflare.com) and sign up
2. Click **"Add a Site"** and enter your domain
3. Choose Free plan
4. Copy Cloudflare's nameservers:
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`

5. Go to your Spaceship control panel
6. Find your domain and update nameservers to Cloudflare's
7. Wait for DNS propagation

8. Back in Cloudflare dashboard, go to **DNS** records:
   - Click **"Add record"**
   - Type: **CNAME**
   - Name: `@` (or your subdomain)
   - Target: `cname.vercel-dns.com`
   - TTL: Auto
   - Proxy: **Proxied** (orange cloud)
   - Click **Save**

9. Go to **SSL/TLS** and set to **Full** (not Flexible)

10. In Vercel dashboard, go to Settings → Domains and add your domain

### Step 5: Verify Everything Works

1. Wait for DNS propagation (can take 24-48 hours)
2. Visit your domain in a browser
3. Test all pages:
   - Home page
   - Services page
   - Doctor profile
   - Testimonials
   - Reviews
   - Blog articles
   - Contact form

### Step 6: Test Contact Form

1. Go to your domain/contact
2. Fill out the form and submit
3. Check that emails arrive at `drraghven10@gmail.com`

---

## Environment Variables (Optional)

If you need to add secrets later, create a `.env.local` file:

```env
# DO NOT commit this file to GitHub
NEXT_PUBLIC_FORMSPREE_ID=f/your_form_id
```

---

## Troubleshooting

### Domain not pointing to Vercel
- Wait 24-48 hours for DNS propagation
- Use [whatsmydns.net](https://whatsmydns.net) to check DNS propagation
- Clear browser cache and try incognito mode

### Contact form not working
- Verify Formspree form ID is correct
- Check spam folder for test emails
- Try submitting from a different browser

### Pages not loading
- Check Vercel deployment status in dashboard
- Look for build errors in Vercel logs
- Try clearing browser cache

### SSL Certificate not working
- Wait 24-48 hours after DNS changes
- If using Cloudflare, ensure SSL/TLS mode is "Full"
- Force HTTPS in Vercel project settings

---

## Maintenance & Updates

### Update Content

To update content, edit files and push to GitHub:

```bash
# Edit files
git add .
git commit -m "Update content"
git push
```

Vercel will automatically rebuild and deploy!

### Update Doctor Profile
Edit `data/doctorProfile.ts`

### Add New Services
Edit `data/services.ts`

### Add Blog Posts
Edit `data/blog.ts` and add new entries

### Update Testimonials
Edit `data/testimonials.ts`

---

## Performance Tips

✅ **Enable Caching in Cloudflare:**
- Go to Caching → Configuration
- Set Default Cache TTL to 30 minutes

✅ **Enable Compression:**
- Cloudflare does this automatically

✅ **Monitor Performance:**
- Use Vercel Analytics dashboard
- Check Cloudflare analytics

---

## Security Recommendations

✅ Enable HTTPS (automatic with Vercel + Cloudflare)
✅ Enable HSTS in Cloudflare (Security → HSTS)
✅ Keep dependencies updated: `npm update`
✅ Monitor for security vulnerabilities: `npm audit`

---

## Need Help?

### Vercel Support
- Documentation: [vercel.com/docs](https://vercel.com/docs)
- Support: [vercel.com/support](https://vercel.com/support)

### Cloudflare Support
- Documentation: [cloudflare.com/learning](https://cloudflare.com/learning)
- Support: [support.cloudflare.com](https://support.cloudflare.com)

### Formspree Support
- Documentation: [formspree.io/help](https://formspree.io/help)
- Support: [formspree.io/support](https://formspree.io/support)

---

**Your website is ready to deploy! 🚀**

Follow the steps above to get your Jaipur Cardiac Centre website live!

---

**Last Updated:** March 2026
