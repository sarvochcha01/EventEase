import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

const EventPageLoader = async ({ params }) => {
  const { id } = params;

  const eventsRef = collection(db, "events");

  const q = query(eventsRef, where("id", "==", id));

  const querySnapshot = await getDocs(q);

  let data = null;
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });

  return data;
};

export default EventPageLoader;
