# ATShop Order Watcher
Watch for paid orders and log them to the console.

## Prerequisites
- Node.js v10+

## Setup

1. Clone the repository.
```bash
git clone https://github.com/WcAServices/atshop-watch-orders.git
```

2. Install dependencies.
```bash
npm i
```

3. Compile to JavaScript.
```bash
npm run build
```

4. Add your shopId and login token to [`config/local.json`](config/default.json)
```json5
{
  "shopId": "xARqw8mo...", // Your shopId
  "loginToken": "9pEzjkpU84RU..." // Your Meteor login token.
}
```
See [docs.atshop.io](https://docs.atshop.io/guide/authentication.html#fetching-your-login-token) for more info on this.

## Running the watcher
```bash
node dist
```
Whenever an order is paid you'll see the order's details printed to the console.

![Example image](https://i.gyazo.com/8eb831a9455082a5d6188f28f8208b64.png)

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, WCA DEV SERVICES SRL.