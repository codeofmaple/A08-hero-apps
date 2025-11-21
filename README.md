# **Hero.IO – Explore, Install & Manage Your Favorite Apps**

A fully responsive and interactive React-based App Store–style web application.  
Browse, search, install, sort, and manage apps — all inside a beautiful single-page experience.

---

## 🔗 Live Demo & Repository

- 🌍 **Live Application:** https://heroapps.pages.dev/  
- 📦 **GitHub Repository:** https://github.com/codeofmaple/A08-hero-apps  

---

## 📌 Description

**Hero.IO** is a modern Single Page Application (SPA) built to showcase and manage mobile-style applications.  
Users can explore apps, view detailed app analytics, perform live search, and install/uninstall apps using LocalStorage.

The SPA ensures smooth navigation, responsive UI, loading animations, and error-free routing after deployment reloads.

---

## 🖼️ Screenshots (To Be Added)

Add screenshots later in the `screenshots/` folder:

```
![Home Page](./screenshots/home.png)
![All Apps](./screenshots/apps.png)
![App Details](./screenshots/details.png)
![My Installation](./screenshots/my-installation.png)
```

---

## 🧠 Main Features

### 🏠 **Home Page**
- Banner with heading + App Store & Play Store buttons  
- Three statistics cards  
- Top Apps section (8 apps)  
- App cards show image, title, downloads, rating  
- Clicking opens **App Details**  
- Includes **Show All** button  

---

### 📱 **All Apps Page**
- Title + subtitle  
- Total app count  
- **Live, case-insensitive search**  
- “No App Found” message  
- Clicking a card → App Details  

---

### 📊 **App Details Page**
- Large visual banner  
- App info: title, downloads, reviews, rating  
- **Install button**:
  - Disabled after install  
  - Shows toast success  
- Rating chart using **Recharts**  
- Detailed description  

---

### 📂 **My Installation Page**
- Displays installed apps from LocalStorage  
- **Uninstall button** removes from UI + LocalStorage  
- Toast feedback  
- Sorting dropdown:
  - High → Low downloads  
  - Low → High downloads  

---

### ⚠️ **Error & Loading**
- Custom 404 page  
- “Relevant Not Found” message  
- Loading animation on:
  - Page navigation  
  - Search  

---

### 💾 **LocalStorage Integration**
- Persistent installs  
- Prevents duplicate app installation  
- Syncs seamlessly with UI  

---

### 🖥️ **Responsive Design**
Works perfectly on:
- Desktop  
- Tablet  
- Mobile  

---

## 🛠️ Technologies Used

- **React.js**  
- **React Router**  
- **Tailwind CSS**  
- **Recharts**  
- **React Toastify**  
- **JavaScript (ES6+)**  
- **LocalStorage API**

---

## 📦 Dependencies

| Dependency | Purpose |
|-----------|---------|
| `react` | Core framework |
| `react-dom` | DOM rendering |
| `react-router` | App routing |
| `recharts` | Analytics charts |
| `react-toastify` | Toast notifications |
| `tailwindcss` | Styling |
| `postcss` | CSS tooling |
| `autoprefixer` | CSS prefix utilities |

---

## 🗂️ Project Structure

```
src/
 ├─ components/
 ├─ pages/
 ├─ data/
 │   └─ apps.json
 ├─ utils/
 ├─ App.jsx
 ├─ main.jsx
public/
```

---

## 🧰 Run Locally

### 1️⃣ Clone the repo
```bash
git clone https://github.com/codeofmaple/A08-hero-apps.git
cd A08-hero-apps
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start development server
```bash
npm run dev
```

### 4️⃣ Build for production
```bash
npm run build
```

Runs at:
```
http://localhost:5173
```

---

## 🌐 Deployment Notes

To avoid SPA refresh issues:  
Enable **Rewrite all routes → index.html**.

Works seamlessly on:
- Cloudflare Pages  
- Netlify  
- Vercel  

---

## 👨‍💻 Contribution

A **Contribution** button is included linking to your GitHub profile.  
Open to improvements, issues, and feature suggestions.

---

## 📄 License

MIT License © 2025 Hero.IO

