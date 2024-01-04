<!-- SignUp.svelte -->
<script>
	import { goto } from "$app/navigation";
    import "$lib/firebase.js"
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  
    let email = "";
    let password = "";
  
    const signUp = async () => {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user);
        goto("/login")
      } catch (error) {
        console.error("Error signing up:", error);
      }
    };
  </script>
  
  <main>
    <h1>Sign Up</h1>
    <input bind:value={email} placeholder="Email" type="email" />
    <input bind:value={password} placeholder="Password" type="password" />
    <button on:click={signUp}>Sign Up</button>
    <p>Already have an account ? <a href="/login">Log In</a></p>
  </main>
  
  <style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 400px;
        height: 400px;
        border: #BA5646 1px solid;
        border-radius: 5px;
        box-shadow: 0px 0px 10px 10px #BA5646;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        color: white;
        font-size: 2rem;
        padding: 0;
    }

    input {
        width: 300px;
        height: 30px;
        margin: 10px;
        border-radius: 5px;
        border: #BA5646 1px solid;
        padding: 5px 10px;
        background-color: #BA5646;
        color: white;
    }

    input::placeholder {
        color: white;
    }

    input:focus {
        outline: none;
    }

    button {
        transition: 1s;
        width: 320px;
        height: 40px;
        margin: 10px;
        border-radius: 5px;
        border: #BA5646 1px solid;
        background-color: transparent;
        color: white;
        cursor: pointer;
        box-shadow: 0px 0px 10px 2px #BA5646;
    }

    button:hover {
        transition: 1s;
        box-shadow: 0px 0px 10px 5px #BA5646;
    }

    p {
        color: white;
        font-size: 14px;
        font-weight: 300;
    }

    a  {
        text-decoration: none;
        color: #BA5646;
        font-weight: 900;
    }
</style>