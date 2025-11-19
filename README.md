# **Hero.IO -- Explore, Install & Manage Your Favorite Apps**

A fully responsive and interactive React-based App Store--style web
application.
Browse, search, install, sort, and manage apps --- all inside a
beautiful single-page experience.

🔗 **Live Demo:** https://heroapps.pages.dev/
📦 **Repository:** https://github.com/codeofmaple/A08-hero-apps

------------------------------------------------------------------------

## 📌 **Description**

**Hero.IO** is a modern Single Page Application (SPA) that allows users
to explore various apps, view app details, see ratings & charts, perform
live search, and install/uninstall apps with persistent LocalStorage
support.

The project includes a responsive design, smooth navigation, loading
animations, detailed app pages, and error-free routing even after
deployment reloads.

------------------------------------------------------------------------

## 🚀 **Live Project**

-   🌍 **Live Link:** https://heroapps.pages.dev/
-   🧾 **GitHub Repo:** https://github.com/codeofmaple/A08-hero-apps

------------------------------------------------------------------------

## 🧠 **Main Features**

### **🏠 Home Page**

-   Banner with heading, text, and **App Store / Play Store** buttons
-   3 States (statistics) section
-   Top Apps section (8 apps in 4-column layout)
-   Each card shows: image, title, downloads, rating
-   Clicking opens the **App Details** page
-   Includes **Show All** button

------------------------------------------------------------------------

### **📱 All Apps Page**

-   Title + subtitle (Figma styled)
-   Shows total app count + search bar
-   **Live Search** (case-insensitive)
-   "No App Found" UI when no match
-   App cards display full info
-   Clicking a card → App Details

------------------------------------------------------------------------

### **📊 App Details Page**

-   Large app image
-   Title, rating, reviews, downloads
-   **Install button**:
    -   Changes to **Installed**
    -   Becomes disabled
    -   Shows **success toast**
-   **Recharts-based Review Chart**
-   Full description section

------------------------------------------------------------------------

### **📂 My Installation Page**

-   Shows all installed apps from LocalStorage
-   **Uninstall button** removes from:
    -   UI
    -   LocalStorage
-   Toast message on uninstall
-   Sorting dropdown:
    -   High → Low downloads
    -   Low → High downloads

------------------------------------------------------------------------

### **⚠️ Error & Loading**

-   Custom 404/Error Page
-   Relevant "Not Found" messages
-   Loading animation during:
    -   Navigation
    -   Search

------------------------------------------------------------------------

### **💾 LocalStorage Integration**

-   Saves installed apps persistently
-   Prevents duplicate installation
-   Syncs My Installation dynamically

------------------------------------------------------------------------

### **📱 Responsive Design**

Works perfectly on: - Desktop
- Tablet
- Mobile

------------------------------------------------------------------------

## 🛠️ **Technologies Used**

-   **React.js**
-   **React Router**
-   **Tailwind CSS**
-   **Recharts**
-   **React Toastify**
-   **JavaScript (ES6+)**
-   **LocalStorage API**

------------------------------------------------------------------------

## 📦 **Dependencies**

  Dependency           Purpose
  -------------------- ------------------------
  `react`              Core UI library
  `react-dom`          DOM renderer
  `react-router`       Routing and navigation
  `recharts`           Interactive charts
  `react-toastify`     Toast alerts
  `tailwindcss`        Styling
  `postcss`            CSS processor
  `autoprefixer`       CSS prefix polyfills

(Add or remove according to your exact project.)

------------------------------------------------------------------------

## 🗂️ **Project Structure**

    src/
     ├─ components/
     ├─ pages/
     ├─ data/
     │   └─ apps.json
     ├─ utils/
     ├─ App.jsx
     ├─ main.jsx
    public/

------------------------------------------------------------------------

## 🧰 **Run Locally**

Follow these steps:

### **1. Clone the repo**

``` bash
git clone https://github.com/codeofmaple/A08-hero-apps.git
cd hero-io
```

### **2. Install dependencies**

``` bash
npm install
```

### **3. Run development server**

``` bash
npm run dev
```

### **4. Build for production**

``` bash
npm run build
```

App runs at:

    http://localhost:5173

------------------------------------------------------------------------

## 🌐 **Deployment Notes**

To avoid 404 errors on refresh: - Enable **SPA fallback to index.html**
- Works on: - Cloudflare Pages
- Netlify
- Vercel

This ensures smooth routing after deployment.

------------------------------------------------------------------------

## 👨‍💻 **Contribution**

A **Contribution** button in the header links to your GitHub profile.
Feel free to improve, report bugs, or extend features.

------------------------------------------------------------------------

## 📄 **License**

Add your license here.

Example:

    MIT License © 2025 Hero.IO

------------------------------------------------------------------------
