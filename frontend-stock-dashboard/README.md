# Stock Market Project

This is a frontend craft project for SSE to build a stock picker widget using Vite. The widget allows users to search for stock symbols and view detailed information about the selected stock. It also provides additional functionalities like multiple searches, navigation history, and data refresh.

## Features
- Search bar with autocomplete functionality to find stocks by symbol.
- Detailed stock information including Name, Symbol, Description, Current Price, Change, Traded On, Industry, PE Ratio, and Market Cap.
- Stock price chart for the day (optional, good to have).
- Multiple searches allowed, and navigation between previous and next items supported.
- User-defined time interval for data refresh on the stock detail page.

# Getting Started

Follow the steps below to get the project up and running on your local machine.

Clone the repository:

git clone https://github.com/techbjunks/stock-market-dashboard
cd vite-stock-project
Install dependencies:

npm install / yarn install

Run the development server:

npm run dev / yarn run dev

Open your browser and visit http://localhost:5173/ to see the stock picker widget in action.

Usage
Enter a stock symbol in the search bar.
As you type, an autocomplete list will appear with stocks matching the search term.
Click on a stock item in the autocomplete list to view its details.
Alternatively, you can press Enter or click the search button to view stock details directly (if the symbol exists) or see a "Stock not found" message.
Dependencies
The project uses the following open-source libraries:

Vite - Fast and lightweight development server and build tool for modern web projects.
React - A JavaScript library for building user interfaces.
React Router - Declarative routing for React applications.
Axios - Promise-based HTTP client for making API requests.
Chart.js - Simple yet flexible JavaScript charting library.
API Used
The project fetches stock data from the Alpha Vantage API using the following endpoint:

Endpoint: https://www.alphavantage.co/query
Function: OVERVIEW
Example: https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=YOUR_API_KEY
Notes
Please note that this project is meant to showcase frontend development skills and may not include all features or error handling present in a production-ready application. It uses a sample API key for demonstration purposes, and it's recommended to replace it with your own API key for real-world use.

Credits
This project was created by Bhaskar Mishra.

License
This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.

Feel free to customize this README according to your project's specific details and requirements. The README should provide clear instructions for running the project, list any dependencies used, and give credit to the original creator. Additionally, you can include information about how to contribute or report issues if the project is intended for collaborative development.

Frontend Stack
# React + TypeScript + Vite

