import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";

const BookPassesLoader = async () => {
  const eventsRef = collection(db, "events");

  const q = query(eventsRef, orderBy("createdAt", "desc"));

  const querySnapshot = await getDocs(q);

  return querySnapshot;
};

export default BookPassesLoader;
