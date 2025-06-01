# 🛍️ Product Dashboard – React + Redux Toolkit

A fully responsive and tested **product dashboard** built using **Create React App**, **Redux Toolkit**, and **styled-components**, fetching data from the [Fake Store API](https://fakestoreapi.com). It features product browsing, filtering, sorting, detail view, and favoriting.

## ✨ Features

- 📦 **Product Listing Page**

  - Responsive grid of product cards
  - Debounced search by product title
  - Filter by category
  - Sort by price (asc/desc)

- 🔍 **Product Detail Page**

  - Detailed product info
  - Add/remove from favorites

- ❤️ **Favorites Page**

  - View and manage all favorited products

- ⚙️ **State Management**

  - Global state using **Redux Toolkit** (products, filters, favorites)
  - Asynchronous actions via **Redux Thunks**

- 🧪 **Testing with Jest**

  - Unit tests for Redux slices and UI components
  - Integration tests for UI workflows (search, filter, favorite)

- 🎨 **Styling**
  - Built using **styled-components**
  - Clean, accessible, and mobile-first UI

---

## 🛠️ Tech Stack

| Category         | Technology                                 |
| ---------------- | ------------------------------------------ |
| Framework        | Create React App                           |
| State Management | Redux Toolkit + Redux Thunks               |
| Routing          | React Router DOM                           |
| Styling          | styled-components                          |
| Testing          | Jest, React Testing Library                |
| API              | [Fake Store API](https://fakestoreapi.com) |
| Deployment       | Vercel                                     |

---

## 📁 Project Structure

```
├── public/                      # CRA public assets
├── src/
│   ├── app/                     # Redux store
│   │   └── store.js
│   ├── components/              # Reusable UI components
│   │   └── __tests__/           # Component tests
│   ├── features/                # Redux slices
│   │   ├── products/            # Products slice + tests
│   │   └── favorites/           # Favorites slice + tests
│   ├── pages/                   # Page-level components
│   │   └── __tests__/           # Page tests
│   ├── routes/                  # Route configurations
│   ├── utils/                   # Helpers (API, debounce)
│   ├── App.js / index.js        # Entry point and app shell
│   └── setupTests.js            # Jest test environment
├── __mocks__/                   # Mocks for react-router
├── jest.config.js               # Jest configuration
├── babel.config.js              # Babel config
├── README.md
```

---

## 🧪 Running Tests

### Run all tests

```bash
npm test
```

### Run with coverage report

```bash
npm test -- --coverage
```

> ✅ Coverage includes Redux slices, components, pages, and integration workflows.

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/keshavagrawal18/fakestore-dashboard.git
cd fakestore-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

> Runs at `http://localhost:3000`

---

## 🌐 API Used

Data is fetched from: [https://fakestoreapi.com](https://fakestoreapi.com)

Endpoints:

- `/products` - all products
- `/products/categories` - all categories
- `/products/:id` - individual product

---

## 👨‍💻 Author

**Keshav Agrawal**  
Frontend Developer | React & Redux Enthusiast  
📫 [keshavagrawal178@example.com](mailto:keshavagrawal178@example.com)  
🐙 [GitHub](https://github.com/keshavagrawal18)

---

## ✅ Evaluation Checklist

- [x] CRA + functional React components
- [x] Redux Toolkit + async thunks
- [x] Pages: listing, detail, favorites
- [x] Debounced search, filter, sort
- [x] Jest unit + integration tests
- [x] Styled-components UI
- [x] Mobile responsive + accessible
- [x] Hosted on Vercel
