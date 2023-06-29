import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 2000,
  headers: {
    Authorization: `Bearer a413a04a-9af6-4ca6-a132-c41bb3d5dbd9`,
  },
})

instance.defaults.headers.common[
  "Authorization"
] = `Bearer a413a04a-9af6-4ca6-a132-c41bb3d5dbd9`

const jwtUnstance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 2000,
  headers: {
    Authorization: `Bearer a413a04a-9af6-4ca6-a132-c41bb3d5dbd9`,
  },
})

export { instance }
