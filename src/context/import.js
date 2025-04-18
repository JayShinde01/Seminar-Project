import { db } from '../services/firebase.js'; // adjust this path as per your project
import { collection, addDoc } from 'firebase/firestore';

// 👇 Your JSON data (or import it from a file)
const data =  [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      company: { name: "Romaguera-Crona" }
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      company: { name: "Deckow-Crist" }
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      company: { name: "Romaguera-Jacobson" }
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      company: { name: "Robel-Corkery" }
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      company: { name: "Keebler LLC" }
    },
    {
      id: 6,
      name: "Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      company: { name: "Considine-Lockman" }
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      phone: "210.067.6132",
      company: { name: "Johns Group" }
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir",
      email: "Sherwood@rosamond.me",
      phone: "586.493.6943 x140",
      company: { name: "Abernathy Group" }
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      phone: "(775)976-6794 x41206",
      company: { name: "Yost and Sons" }
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      company: { name: "Hoeger LLC" }
    }
  ];
  

async function importData() {
  const colRef = collection(db, "Posts"); // change "users" to your collection name

  for (let item of data) {
    await addDoc(colRef, item);
    console.log(`Uploaded: ${JSON.stringify(item)}`);
  }

  console.log("✅ All data uploaded successfully!");
}

importData();
