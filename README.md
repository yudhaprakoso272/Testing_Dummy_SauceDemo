# Testing_Dummy_SauceDemo

# SauceDemo Manual and Automation Testing Project

## 📌 Overview
Manual testing simulation project using [SauceDemo](https://www.saucedemo.com) to practice end-to-end functional testing workflow.

## 🧪 What Was Tested?
- ✅ Login (valid & invalid scenarios)
- ✅ Add to Cart
- ✅ Remove Item from Cart
- ✅ Checkout Process

## 🛠 Tools Used
- Google Spreadsheet (Test Cases)
- GitHub Issues (Bug Tracking)
- Chrome Browser

## 📋 Test Documentation
- 📄 [Test Case Spreadsheet](https://docs.google.com/spreadsheets/d/1lqQlW4fIZvDmfOP5wn0Tz2OyRS1-GXaT7tGwwtToF44/edit?usp=sharing)
- 🐞 [Bug Reports on GitHub Issues](https://github.com/yudhaprakoso272/Testing_Dummy_SauceDemo/issues)
- 📝 [Test Summary Report](https://docs.google.com/document/d/1DGYCCg-VFtEtIotoCQ-3k4tsDjNIOUbE8aMd5qZCCMo/edit?usp=sharing)

## 📈 Test Results
- Total Test Cases: 30
- Passed: 28
- Failed: 2
- Bugs Found: 2

## 🤖 Automation Testing

This project also includes end-to-end automation tests built using **Cypress**.

### ✅ Automated Test Scenarios:
- Checkout with valid data
- Checkout with error data
- Checkout with invalid data

### 🧰 Tools & Techniques Used:
- Cypress
- Page Object Model (POM)
- Custom Commands
- HTML Report Generator (Mochawesome)
- GitHub Actions for CI
- Video recording of test runs

### 📁 Output Files:
- `/cypress/videos/` – Recorded run session
- `/cypress/reports/` – HTML test report
- `/cypress/e2e/` – All automation scripts

🔗 Check full automation source code inside this repo.

## 🙋‍♂️ Author
Aliffrianto Yudha Prakoso  
[LinkedIn](https://www.linkedin.com/in/yudha-31j2001)

---

🚀 Cara Menjalankan Project Ini
Ikuti langkah-langkah berikut untuk menjalankan project ini secara lokal di komputermu:

📦 1. Clone Repository
      - git clone https://github.com/yudhaprakoso272/Testing_Dummy_SauceDemo.git
      - cd Testing_Dummy_SauceDemo
🧰 2. Install Dependencies
      Pastikan kamu sudah menginstall Node.js dan npm. Lalu jalankan:
      - npm install
▶️ 3. Menjalankan Test Otomatis (Cypress Run Headless)
      - npm run test:html
🧪 4. Menjalankan dengan Cypress UI (Mode Interaktif)
      - npx cypress open

📁 Struktur Folder Project (Diagram Sederhana)

📦 TESTING_DUMMY_SAUCEDEMO/
├── 📁 cypress/
│   ├── 📁 downloads/
│   ├── 📁 e2e/
│   │   └── sauceDemo.cy.js
│   ├── 📁 fixtures/
│   │   └── saucedemoData.json
│   │   └── example.json
│   ├── 📁 reports/           
│   │   └── html               ⟵ Output HTML report (Mochawesome)
│   ├── 📁 support/
│   │   ├── 📁 elementPage/
│   │   │   └── saucedemoPage.json
│   │   ├── 📁 pageObject/
│   │   │   └── saucedemoPage.js
│   │   ├── commands.js
│   │   └── e2e.js
│   └── 📁 videos/            ⟵ Auto-recorded test result (video)
│
├── 📁 node_modules/
├── .gitignore
├── cypress.config.js
├── merged-report.json         ⟵ Report config
├── package.json
├── package-lock.json
├── README.md
└── 📁 .github/               ⟵ (Tambahan untuk CI/CD)
    └── workflows/
        └── cypress-ci.yml   ⟵ GitHub Actions Workflow

---

Feel free to explore, fork, or use this repo as a reference for your own testing practice.
