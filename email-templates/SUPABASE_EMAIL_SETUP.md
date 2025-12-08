# Supabase Email Template Setup Guide

## How to Configure Custom Confirmation Email in Supabase

### Step 1: Access Email Templates in Supabase

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your **Eklavyaa** project
3. Navigate to **Authentication** → **Email Templates** in the left sidebar

### Step 2: Configure the Confirmation Email

1. Click on **Confirm signup** template
2. Replace the default template with the custom HTML from `confirmation-email.html`
3. The template uses the following Supabase variables:

   - `{{ .ConfirmationURL }}` - The confirmation link
   - `{{ .Email }}` - User's email address
   - `{{ .UserMetaData.full_name }}` - User's full name (from signup form)
   - `{{ .UserMetaData.username }}` - User's username (from signup form)
   - `{{ .UserMetaData.class_level }}` - User's class level (from signup form)

### Step 3: Verify Metadata is Being Sent

Make sure your signup form in `src/app/signup/page.tsx` is sending metadata correctly:

```typescript
const { data, error } = await signUp(
  formData.email,
  formData.password,
  {
    full_name: formData.fullName,
    username: formData.username,
    user_type: formData.userType,
    class_level: formData.classLevel,
    phone: formData.phone,
    avatar_url: '/avatar.png'
  }
);
```

### Step 4: Test the Email

1. Sign up a new test user
2. Check the email inbox for the confirmation email
3. Verify that all user data displays correctly
4. Test the confirmation button/link

### Step 5: Customize Email Settings (Optional)

In Supabase Dashboard → **Project Settings** → **Auth**:

- **Site URL**: Set to your production URL (e.g., `https://your-domain.com`)
- **Redirect URLs**: Add allowed redirect URLs after confirmation
- **Email Rate Limits**: Configure as needed
- **SMTP Settings**: (Optional) Configure custom SMTP for branded emails

### Available Supabase Email Variables

You can use these variables in your email templates:

- `{{ .ConfirmationURL }}` - Email confirmation link
- `{{ .Email }}` - User's email
- `{{ .Token }}` - Confirmation token
- `{{ .TokenHash }}` - Hashed token
- `{{ .SiteURL }}` - Your site URL
- `{{ .UserMetaData.* }}` - Any custom metadata you pass during signup

### Email Template Features

✅ **Responsive Design** - Works on mobile and desktop
✅ **Brand Colors** - Uses your yellow (#ffce3b, #ffde00) theme
✅ **User Data** - Shows name, email, username, class level
✅ **Security Notice** - 24-hour expiration warning
✅ **Alternative Link** - Fallback if button doesn't work
✅ **Feature Highlights** - Shows what users can do on the platform

### Troubleshooting

**Email not sending?**
- Check spam folder
- Verify email in Auth → Settings → Auth Providers → Email is enabled
- Check rate limits in project settings

**Variables not showing data?**
- Verify metadata is being passed during signup
- Check that variable names match exactly (case-sensitive)

**Styling issues?**
- Some email clients strip CSS, so inline styles are used
- Test in multiple email clients (Gmail, Outlook, Yahoo)

### Additional Email Templates to Customize

You can also customize these templates in Supabase:

1. **Magic Link** - For passwordless login
2. **Invite User** - For inviting new users
3. **Reset Password** - For password recovery
4. **Change Email** - For email address changes

---

## Need Help?

- Supabase Email Docs: https://supabase.com/docs/guides/auth/auth-email-templates
- Email Testing Tool: https://www.mail-tester.com/
- HTML Email Guide: https://www.emailonacid.com/
