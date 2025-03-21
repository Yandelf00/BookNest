# BookNest

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

**BookNest** is a personal web tracker I’m currently working on. Initially, it started as a simple project to test out new technologies, but it has since evolved into a full-fledged book-tracking application. The project is still a work in progress, but it’s coming along nicely!

---
## Features

- **Book Tracking**: Keep track of the books you’re reading, including details like genre, author, and progress.

- **Charts and Analytics**: Visualize your reading habits with interactive charts powered by **Recharts**.

- **Authentication**: Secure user authentication using **Lucia Auth**.

- **Responsive Design**: Built with **Tailwind CSS** for a clean and responsive UI.

- **Data Management**: Uses **Prisma** as the ORM to manage database interactions.

- **Efficient Data Fetching**: Utilizes **React Query** for efficient and optimized data fetching.

---

## Technologies Used

- **Frontend**:
    
    - [Next.js(15)](https://nextjs.org/) - React framework for server-rendered applications.
        
    - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling.
        
    - [Recharts](https://recharts.org/) - Charting library for React.
        
    - [Lucia Auth](https://lucia-auth.com/) - Authentication library.
        
- **Backend**:
    
    - [Prisma](https://www.prisma.io/) - ORM for database management.
        
    - [React Query](https://tanstack.com/query/v4) - Data fetching and state management.
        
- **Database**:
    
    - SQLite 
        

---

## Screenshots

Here are some screenshots of the project (work in progress):

### Home Page

![Home Page](/public/readme/home_image.png)  


### Book View Page

![Book View](/public/readme/my_books_image.png)  


### Adding Book Page

![Add Books](/public/readme/add_books_image.png)  


### Tablet Version

![Mobile Version](/public/readme/my_books_mobile_image.png)  

### Mobile Version

![Tablet Version](/public/readme/add_books_mobile.png)  

---

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js 
    
- npm or yarn
    
- SQLite 
    

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Yandelf00/BookNest
cd booknest
```
 
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up the database:
    
    - Update the `schema.prisma` file with your database configuration.
        
    - Run migrations:

```bash
npx prisma migrate dev --name init
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000`.

---

Happy coding! 🚀