## 🧾 Documentation: Using `lucide-react` Icons in the Project

### 📌 Purpose

This document explains how icons are implemented using the **lucide-react** library in the `Restaurant_web_app` project.
It helps new developers understand installation, import usage, best practices, and troubleshooting common issues.


### 🛠 1. Installation

We use [`lucide-react`](https://www.npmjs.com/package/lucide-react) — a lightweight, modern icon library for React.

To install, run:

```bash
npm install lucide-react
```

or if using Yarn:

```bash
yarn add lucide-react
```

This installs the package under `node_modules` and registers it in `package.json`.

> ⚠️ **Note:** If you skip this step, Vite will throw:
>
> ```
> [plugin:vite:import-analysis] Failed to resolve import "lucide-react"
> ```
>
> meaning the package isn’t installed.

---

### 🧩 2. Importing Icons

You can import any icon component directly from the library.
Each icon is exported as a React component.

Example:

```jsx
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
```

---

### 🎨 3. Using Icons in Components

Icons behave like normal React components — they accept standard props such as `className`, `size`, and `color`.

Example usage:

```jsx
<Facebook className="w-5 h-5 text-gray-400 hover:text-blue-500" />
```

In the `Footer.jsx` component, icons are used like this:

```jsx
<Mail className="w-4 h-4" />
<Phone className="w-4 h-4" />
<MapPin className="w-4 h-4" />
```

You can control size with Tailwind (e.g., `w-6 h-6`) or via props:

```jsx
<Facebook size={24} color="#1DA1F2" />
```

---

### 🧱 4. Example Component Reference

Here’s a simplified version of how icons are integrated in the footer:

```jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="flex justify-center gap-4">
        {socialLinks.map((social, i) => (
          <a key={i} href={social.href} aria-label={social.label}>
            <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition" />
          </a>
        ))}
      </div>
    </footer>
  );
}
```


### 🔄 5. Troubleshooting

| Problem                                   | Cause                            | Solution                                  |
| ----------------------------------------- | -------------------------------- | ----------------------------------------- |
| `Failed to resolve import "lucide-react"` | Package not installed            | Run `npm install lucide-react`            |
| Icons not visible                         | Wrong className or missing color | Check Tailwind styles or use `color` prop |
| Icons too large/small                     | Default size applied             | Add `className="w-4 h-4"` or `size={20}`  |

---

### 🧭 6. Best Practices

* Always import only the icons you need (to keep bundle size small).
* Maintain consistent icon sizes using Tailwind width/height classes.
* Prefer semantic usage — e.g., `Phone` for contact numbers, `Mail` for emails.
* When adding new icons, document them in the `socialLinks` or respective section.

---

### 🧰 7. Maintenance Notes

If icons ever fail after cloning or deployment:

1. Run `npm install` again to reinstall dependencies.
2. Confirm `lucide-react` exists in `package.json`.
3. Restart the Vite dev server using:

   ```bash
   npm run dev
   ```

### 📄 Author Notes

**File:** `src/components/Footer.jsx`
**Maintained by:** Frontend Development Team
**Last Updated:** November 2025
**Dependencies:** React, lucide-react, TailwindCSS, Vite
