# 🧪 Saucedemo Playwright Automation (JavaScript)

This project automates a basic end-to-end scenario on the public demo website **[https://www.saucedemo.com](https://www.saucedemo.com)** using **Playwright with JavaScript**.

## ✅ **Test Scenario**

The automated test covers:

1. Login with valid credentials
2. Add one product to the cart
3. Verify the product name in the cart
4. Logout successfully

---

## 📦 **Tech Stack**

* **Playwright**
* **JavaScript**
* **Node.js**

---

## 📁 **Project Structure**

```
/saucedemo-playwright
 ├── tests
 │    └── saucedemo.spec.js
 ├── package.json
 ├── playwright.config.js
 ├── README.md
```

---

# 🚀 How to Run This Project

Follow these steps to set up and execute the tests.

---

## 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/saucedemo-playwright.git
cd saucedemo-playwright
```

---

## 2️⃣ **Install Dependencies**

Make sure you have **Node.js** installed.

Then run:

```bash
npm install
```

---

## 3️⃣ **Install Playwright Browsers**

```bash
npx playwright install
```

---

## 4️⃣ **Run the Test**

```bash
npm test
```

or

```bash
npx playwright test
```

---

# 🧪 Test File Overview

The main test is located in:

```
tests/saucedemo.spec.js
```

It performs:

* Login
* Adding first product to cart
* Verifying product name
* Logout

---

# 📷 Optional: Run in UI Mode (Visual Execution)

```bash
npx playwright test --ui
```

---

# 🛠 Troubleshooting

### **If you get JSON parse errors (`^@` characters)**

Your file was saved in **UTF-16** encoding.
Fix by reopening using Notepad → Save As → **Encoding: UTF-8**.

### **If browsers are missing**

Run:

```bash
npx playwright install
```