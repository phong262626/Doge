import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHEHqYCU1dAJLOFPC7TLOa2KucoZG4bxA",
  authDomain: "wolf-game-fdb66.firebaseapp.com",
  databaseURL: "https://wolf-game-fdb66-default-rtdb.firebaseio.com",
  projectId: "wolf-game-fdb66",
  storageBucket: "wolf-game-fdb66.firebasestorage.app",
  messagingSenderId: "10904255215",
  appId: "1:10904255215:web:7a50312897b1e97c77f91a"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const name = localStorage.getItem("name");

// ---------- HOST ----------
window.createRoom = function () {
  const pass = document.getElementById("hostPass").value;
  if (pass !== "112233") return alert("รหัสโฮสผิด");

  const roomCode = Math.floor(1000 + Math.random() * 9000).toString();
  const roomRef = ref(db, "rooms/" + roomCode);

  set(roomRef, {
    host: name,
    players: {}
  });

  document.getElementById("roomCode").innerText = "รหัสห้อง: " + roomCode;

  onValue(ref(db, "rooms/" + roomCode + "/players"), snap => {
    const box = document.getElementById("players");
    box.innerHTML = "";
    snap.forEach(p => {
      const div = document.createElement("div");
      div.className = "list-item";
      div.innerText = p.val().name;
      box.appendChild(div);
    });
  });
};

// ---------- PLAYER ----------
window.joinRoom = function () {
  const room = document.getElementById("roomInput").value;
  if (!room) return;

  const playerRef = push(ref(db, "rooms/" + room + "/players"));
  set(playerRef, {
    name: name
  });

  document.getElementById("status").innerText = "เข้าห้องแล้ว รอโฮส...";
};
