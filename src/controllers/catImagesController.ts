//@ts-nocheck
import axios from "axios";

const catImagesController = async <T , M>(
  userDetails?: any,
  match?: any,
  replies?: (chatId: T, message: M) => void
) => {
  const chatId = userDetails;
  if (replies) { 
     replies(chatId, "I will get you some cool cat images 🐱")
     setTimeout(() =>  {
        replies(chatId, "checking through my gallery ")
     }, 500 )
  }
};



export { catImagesController };
