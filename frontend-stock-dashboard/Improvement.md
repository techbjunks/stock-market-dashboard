### Improvement

1. GraphQL (will solve overfetching & underfetching)
    This can be observed on details screen , where we are fetching same results
    for stock-detail & chart-detail
    - query StockData($symbol: String!) {
       - stockDetails(symbol: $symbol) {
            name
            symbol
            country
            description
            EPS
            PERatio
            Currency
            Exchange
            Industry
            MarketCapitalization
        }
       - stockChart(symbol: $symbol) {
            labels
            data
        }
    }
2. Central Level Error Monitoring
    Sentry/bugsnag for Error Monitoring, we can use ErrorBoundary for sending the events.
3. JS Code Splitting
4. E2E Test Suite / Snapshot testing can be incorporated.
5. ESLint configuration for standard code delivery
6. Lighthouse Performance check
7. WebSockets and Server-Sent Events (SSE) are preferred for real-time updates, as they provide more efficient and scalable ways to deliver data to clients without the need for constant polling.
8. Documentation can be better , we can add each component small documentation or automate it
9. Shimmer loading can be made for giving a perception of instant loading to user
11. Components can be improved
    - In Button - variants , size such features can be added
12. API dosent have a standard JSON response , we can create some helpers to resolve it 
14. Tokenomics for project can be improved
        - theme
            - color
            - contrast
            - elevation
            - font-family
            - typography
            - spacing
            - motion (animations)
            - border
            - position - (padding, margin) - theme.spacing[0], theme.spacing[1], theme.spacing[2] for   consitent spacing around layout
15. In useNavigationROute , we can create hasNext:boolean to check if forward route is there or not.
16. API_KEY is in constant , ideally it should not be kept there.