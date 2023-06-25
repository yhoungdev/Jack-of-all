import axios from "axios";

const reminderController = async <T, M>(
  userDetails?: any,
  match?: any,
  replies?: (chatId: T, message: M) => void
) => {
  const chatId = userDetails;
  if (replies) {
   
    //@ts-ignore
    return replies(chatId, "Hi, what do you want me to remind you about ?");
  }
};



export { reminderController };
