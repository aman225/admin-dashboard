# Admin Dashboard

A modern, responsive admin dashboard built with Next.js 14, TypeScript, and Tailwind CSS. Features user management, multi-step forms, and a beautiful dark mode.

![Dashboard Preview](https://via.placeholder.com/800x400?text=Dashboard+Preview)

## 🚀 Features

- **User Management Dashboard**
  - Fetch and display users from external API
  - Real-time search/filter by name or city
  - Responsive data display with loading states
  - Error handling with user-friendly messages

- **Multi-Step Form**
  - 3-step user creation process
  - Form validation with Zod
  - Progress persistence with localStorage
  - Smooth animations between steps
  - Form review before submission

- **Modern UI/UX**
  - Dark/Light mode toggle
  - Responsive design for all devices
  - Smooth transitions and animations
  - Toast notifications for actions
  - Clean and intuitive interface

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Validation:** [Zod](https://zod.dev/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/admin-dashboard.git
   cd admin-dashboard
   
2. Install dependencies

       npm install
       # or
       yarn install
       # or
       pnpm install
   
3.   Run the development server
   
                npm run dev
                # or
                yarn dev
                # or
                pnpm dev

     🎯 Usage
Dashboard
The main dashboard displays a list of users fetched from JSONPlaceholder API. You can:

View user information (name, email, phone, city)
Search users by name or city in real-time
Navigate to add new users
Adding Users
Click the "Add New User" button to access the multi-step form:

Step 1 - Basic Info

Enter user's name
Enter valid email address
Step 2 - Address

Enter street address
Enter city
Enter 5-digit ZIP code
Step 3 - Review

Review all entered information
Submit to console (for demo purposes)
Theme Toggle
Click the sun/moon icon in the top-right corner to switch between light and dark modes. Your preference is saved automatically.

🔧 Configuration
API Endpoint
The app fetches user data from:


