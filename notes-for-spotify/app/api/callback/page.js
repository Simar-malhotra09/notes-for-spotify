import express from "express";
import dotenv from "dotenv";
import querystring from "querystring";
import axios from "axios";

const SPOTIFY_CLIENT_ID = "13404886895443629889f71531bde7ec";
const SPOTIFY_CLIENT_SECRET = "cc2eb67638f1455f8be389e1aa2d94ba";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/callback";
const router = express.Router();

router.get("/", async (req, res) => {
  const { code, state } = req.query;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  };

  try {
    const response = await axios.post(
      authOptions.url,
      querystring.stringify(authOptions.form),
      {
        headers: authOptions.headers,
      }
    );

    const { access_token, token_type, expires_in, refresh_token } =
      response.data;

    res.send("Authentication successful! Tokens stored.");
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).send("Authentication error.");
  }
});

export default router;
