export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"

const KEY = localStorage.getItem("token")

export const HEADER = {
    headers: {
        auth: KEY
    }
}