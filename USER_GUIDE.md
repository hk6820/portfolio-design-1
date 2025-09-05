# 🚀 Portfolio User Guide

Welcome to your dynamic portfolio! This guide will help you customize and deploy your portfolio to any marketplace or hosting platform.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Customization Guide](#customization-guide)
3. [Adding Your Content](#adding-your-content)
4. [Deployment Options](#deployment-options)
5. [Troubleshooting](#troubleshooting)
6. [Advanced Customization](#advanced-customization)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Customize Your Portfolio
Edit the `src/config.js` file with your personal information.

### 4. Build for Production
```bash
npm run build
```

## 🎨 Customization Guide

### Personal Information
Edit `src/config.js` to update your personal details:

```javascript
personalInfo: {
  name: "Your Full Name",
  subtitle: "Your Job Title",
  description: "Your professional summary...",
  resumeLink: "/files/yourResume.pdf",
  imageSrc: "/assets/icons/your-photo.png",
  email: "your.email@example.com",
  linkedIn: "https://www.linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  instagram: "https://instagram.com/yourhandle"
}
```

### Navigation
Customize your navigation menu with advanced options:

```javascript
navigation: {
  title: "Your Portfolio Title",
  showMobileMenu: true,  // Enable/disable mobile menu
  links: [
    { 
      label: "About me", 
      href: "#aboutme",
      showOnMobile: true,  // Show in mobile menu
      order: 1             // Display order
    },
    { 
      label: "Skills & Tools", 
      href: "#skills&tools",
      showOnMobile: true,
      order: 2
    },
    { 
      label: "Experience", 
      href: "#experience",
      showOnMobile: true,
      order: 3
    },
    { 
      label: "Projects", 
      href: "#projects",
      showOnMobile: true,
      order: 4
    },
    { 
      label: "Education", 
      href: "#education",
      showOnMobile: true,
      order: 5
    },
    { 
      label: "Contact", 
      href: "#contact",
      showOnMobile: true,
      order: 6
    }
  ]
}
```

**Advanced Navigation Features:**
- **Mobile Menu**: Fully responsive with hamburger menu
- **Link Ordering**: Sort links using the `order` property
- **Mobile Filtering**: Hide specific links on mobile with `showOnMobile: false`
- **Auto-Sync**: Contact footer automatically uses the same navigation links
- **External Links**: Support for external URLs and file downloads

For detailed navigation configuration, see [NAVBAR_GUIDE.md](./NAVBAR_GUIDE.md).

### Projects
Add your projects to the `projects` array:

```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    tech: ["React", "JavaScript", "CSS"],
    image: "/assets/icons/project-image.png",
    live: "https://your-live-demo.com",
    github: "https://github.com/yourusername/project"
  }
]
```

### Experience
Update your work experience:

```javascript
experience: [
  {
    company: "Company Name",
    logo: "/assets/icons/company-logo.png",
    duration: "Start Date – End Date",
    techStack: ["React", "TypeScript", "Node.js"],
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3"
    ]
  }
]
```

### Skills
Customize your skills and tools:

```javascript
skills: [
  {
    title: "Programming Languages",
    borderColor: "border-indigo-500",
    items: [
      { label: "React", icon: "/assets/icons/react-icon.png" },
      { label: "JavaScript", icon: "/assets/icons/js-icon.png" }
    ]
  }
]
```

### Education
Add your educational background:

```javascript
education: [
  {
    degree: "Your Degree",
    institution: "University Name",
    duration: "Start Year – End Year",
    note: "Additional notes or achievements"
  }
]
```

## 📁 Adding Your Content

### 1. Profile Photo
- Place your photo in `public/assets/icons/`
- Recommended size: 400x400px or square aspect ratio
- Supported formats: PNG, JPG, JPEG
- Update the `imageSrc` in `config.js`

### 2. Resume/CV
- Place your resume in `public/files/`
- Supported formats: PDF (recommended)
- Update the `resumeLink` in `config.js`

### 3. Project Images
- Add project screenshots to `public/assets/icons/`
- Recommended size: 400x300px
- Update the `image` field in your project objects

### 4. Company Logos
- Add company logos to `public/assets/icons/`
- Recommended size: 64x64px
- Update the `logo` field in your experience objects

### 5. Skill Icons
- Add skill icons to `public/assets/icons/`
- Recommended size: 64x64px
- Update the `icon` field in your skill items

## 🚀 Deployment Options

### Option 1: GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Select the "build" folder as the source
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Build your project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://netlify.com)
3. Your site will be deployed automatically

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

### Option 4: Any Static Hosting
1. Run `npm run build`
2. Upload the contents of the `build` folder to your hosting provider

## 🔧 Troubleshooting

### Common Issues

**Issue: Images not displaying**
- Check that image paths in `config.js` start with `/assets/icons/`
- Ensure images are in the `public/assets/icons/` directory
- Verify file names match exactly (case-sensitive)

**Issue: Resume not downloading**
- Ensure your resume is in the `public/files/` directory
- Check that the `resumeLink` in `config.js` points to the correct file
- Verify the file is a PDF

**Issue: Links not working**
- Check that all URLs in `config.js` include `https://`
- Ensure social media links are complete and valid

**Issue: Build fails**
- Run `npm install` to ensure all dependencies are installed
- Check for any syntax errors in `config.js`
- Ensure all required fields are filled in

### Getting Help
- Check the console for error messages
- Verify all file paths are correct
- Ensure all required fields in `config.js` are populated

## 🎨 Advanced Customization

### Styling
- The portfolio uses Tailwind CSS for styling
- Main styles are in `src/index.css` and `src/App.css`
- Component-specific styles are in individual component files

### Adding New Sections
1. Create a new component in the appropriate directory
2. Add the component to `App.js`
3. Add the section data to `config.js`
4. Update navigation links if needed

### Color Scheme
- Primary colors: Purple and Cyan gradients
- Background: Dark slate theme
- To change colors, update the Tailwind classes in components

### Animations
- Uses Framer Motion for animations
- Animation configurations are in individual components
- Modify animation properties in component files

## 📝 Best Practices

1. **Keep it updated**: Regularly update your projects and experience
2. **Optimize images**: Compress images for faster loading
3. **Test responsiveness**: Check your portfolio on different devices
4. **Keep it professional**: Use high-quality images and professional language
5. **Regular backups**: Keep your code and assets backed up

## 🎯 Portfolio Marketplace Tips

### For Portfolio Marketplaces:
1. **Clear documentation**: This guide helps users understand how to customize
2. **Professional appearance**: The design is modern and professional
3. **Easy customization**: All content is centralized in one config file
4. **Responsive design**: Works on all devices
5. **Fast loading**: Optimized for performance

### Customization Checklist:
- [ ] Update personal information
- [ ] Add your projects
- [ ] Update work experience
- [ ] Add your skills
- [ ] Update education
- [ ] Add your profile photo
- [ ] Add your resume
- [ ] Update social media links
- [ ] Test all links and functionality
- [ ] Build and test the production version

## 📞 Support

If you need help customizing your portfolio:
1. Check this guide first
2. Look at the example data in `config.js`
3. Test changes in development mode first
4. Keep backups of working versions

---

**Happy coding! 🎉**

Your portfolio is now ready to showcase your skills and impress potential employers or clients!
