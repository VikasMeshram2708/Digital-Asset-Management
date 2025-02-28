export const authenticator = async () => {
  try {
    const Production_BASE_URL = "https://dam-ruby.vercel.app";
    const localBaseUrl = "http://localhost:3000";

    let BASE_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = Production_BASE_URL;
    } else {
      BASE_URL = localBaseUrl;
    }

    const response = await fetch(`${BASE_URL}/api/imagekit-auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    // console.log("login auth", data);
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error}`);
  }
};
