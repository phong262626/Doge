<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDHEHqYCU1dAJLOFPC7TLOa2KucoZG4bxA",
  authDomain: "wolf-game-fdb66.firebaseapp.com",
  databaseURL: "https://wolf-game-fdb66-default-rtdb.firebaseio.com",
  projectId: "wolf-game-fdb66",
  storageBucket: "wolf-game-fdb66.firebasestorage.app",
  messagingSenderId: "10904255215",
  appId: "1:10904255215:web:7a50312897b1e97c77f91a"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
</script>
