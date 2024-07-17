import dotenv from "dotenv"
dotenv.config()

const {
    PORT,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
} = process.env

const environments = {
    PORT: +PORT,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET
}

export default environments