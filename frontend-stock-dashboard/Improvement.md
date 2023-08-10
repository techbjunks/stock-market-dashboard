### Improvement

    - GraphQL (will solve overfetching & underfetching)
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
                data // we can remove un used fields as well , transformation of data as well like stockPrice
            }
        }
    - Ideally for such scenarios web socket should be used where we have to frequently update the data.
    - Central Level Error Monitoring
        - Sentry/bugsnag for Error Monitoring, we can use ErrorBoundary for sending the error events. P95, P97 etc
        - Canary Analysis Mechanism can be used with the help of this , active traffic re routing
    - JS Code Splitting / Bundle creation
    - Relative path across project , we can use alias for that
    - Segregate Search Functionality , list specificaly functionality if more such functionalities are there
    - Discuss state caching while doing navigation
        - navigate("/details", { state: { stock_details: "AAPL" } }); 
        As it is a stock application we need to be careful about the data logic , as it can update very effectively
    - E2E Test Suite / Snapshot testing can be incorporated.
        - E2E we can consider Playwright or Pupeteer
    - ESLint configuration for standard code delivery
    - Lighthouse Performance check
    - Interceptor at root level
        - common error case can be handled here like Note , API reached Maximum Limit
        - common case like uniqueId for each request can be added there and each request should go via interceptor.
        - controllers should be added in case of unmount API call should not be there
            const controller = new AbortController();
            const {signal} = controller;
            controller.abort();
        - API Retry Mechanism should be there / Circuit Breaker Logic as well can be added.
        - we can add common headers here if required.
    - WebSockets and Server-Sent Events (SSE) are preferred for real-time updates, as they provide more efficient and scalable ways to  deliver data to clients without the need for constant polling.
    - Documentation can be better , we can add each component small documentation or automate it
    - Design should be coming from a seperate repository
    - Components can be improved
         Button 
            - variants , size such features can be added
            - anchor button for Links and Redirect
            - icon with iconPosition ('left' | 'right')
            - size (small | medium | large | xlarge)
         Input   
            - Label in Input for form accessibility , focus Management
    - API dosent have a standard JSON response , we can create some helpers to resolve it
    - Tokenomics for project can be improved
        - theme
            - color
            - contrast
            - elevation
            - font-family
            - typography
            - spacing
            - motion (animations)
            - border
            - position - (padding, margin) - theme.spacing[0], theme.spacing[1], theme.spacing[2] for   
            consitent spacing around layout
    - In useNavigationROute , we can create hasNext:boolean to check if forward route is there or not.
    - API_KEY should not be kept on client side espicially prod keys. Bad Practise
    - Story-book for common components 
    - We can assess chart component , if the chart component computation is expensive 
        - we can useMemo , to memoize the component if the data for revaluation dosent change
    - Accessibility Score , we can use WAVE and certain tools to check for accessibility validation
    - Automation , we can use github workflows in the project
        - ESlint configuration on the workflow , safety checks like variable declarations etc
        - Create a docker setup for UI verification , we can use tools like devstack
    - Vernacuarizations / language localization can be a good use case for stock excahnge
            - Currency
            - Language
    - Humanization for values like especially Amount
    - Build Process
        - Two builds brotli & Gzip (Serve modern code to modern browsers for faster page loads)
    - If more components are there we can introduce lazy loading.
    - Preload imp resource , Render Initial Routes , Precache Remaining assets (service worker for next reload) , Lazy load Other Routes
    - DNS Preconnect , Preload , Prefetch , Push Notification from server side if HTTP2 connection , QUIC UDP protocol can be useful however in nascent stage
    - Constant shimmer in Routes for fallback
    - CDN for images , webP wrapper we might have to write