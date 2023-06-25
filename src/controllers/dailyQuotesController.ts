import axios from "axios";

const dailyQuoteController = async <T, M>(
  userDetails?: any,
  match?: any,
  replies?: (chatId: T, message: M) => void
) => {
  const chatId = userDetails;
  if (replies) {
    const quote = await getJokes();
    //@ts-ignore
    return replies(chatId, quote);
  }
};

const getJokes = async () => {
  try {
    // const getResponse =  await axios('https://random-dad-joke1.p.rapidapi.com/', {
    const getResponse = await axios("https://type.fit/api/quotes", {
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "random-dad-joke1.p.rapidapi.com",
        Accept: "application/json",
      },
    });
    const response = getResponse?.data[0]?.text;
    return response;
  } catch (err) {
    console.log(err);
  } finally {
  }
};

export { dailyQuoteController };
