/* firebase */
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Constants from "expo-constants";
/* types */
import Shop from "@/src/types/shop";


const app = initializeApp(Constants.expoConfig?.extra?.firebase);
const db = getFirestore(app);
  
export const getShops = async () => {
  const snapshot = await getDocs(collection(db, "shops"));
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};
