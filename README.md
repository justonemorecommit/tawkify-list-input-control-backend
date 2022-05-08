# A simple backend for Tawkify list input control

## Environment

You can make a copy of `.env.example` as `.env` and set environment variables

- `PORT`
  A port that server will be running on

## Endpoints

1. PUT /list

- Example request body

  ```
    [
      "item1",
      "item2",
      "item3"
    ]
  ```

2. GET /list

- Example response body

  ```
    [
      "item1",
      "item2",
      "item3"
    ]
  ```
