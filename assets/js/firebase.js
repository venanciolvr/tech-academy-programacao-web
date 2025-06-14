// Importa os módulos do Firebase do CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Exporta as instâncias
export { auth, db };

async function checkEmailExists(email) {
    try {
        console.log('Verificando se o e-mail existe:', email);
        const methods = await fetchSignInMethodsForEmail(auth, email);
        console.log('Métodos retornados pelo Firebase:', methods);
        const exists = methods.length > 0;
        console.log('E-mail existe:', exists);
        return exists;
    } catch (error) {
        console.error('Erro ao verificar e-mail:', error);
        throw new Error('Erro ao verificar e-mail. Tente novamente.');
    }
}