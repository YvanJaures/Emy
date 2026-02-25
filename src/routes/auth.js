import express from "express";
import { register, login } from "../services/auth.js";
import { texteEstValide, motDePasseEstvalide, courrielEstValide, telEstValide } from "../validators/validation.js";

const router = express.Router();

//Route register
router.post("/register", async (req, res) => {
    const { user_name, name, surname, email, phone, password, role, company_name } = req.body;

    if (!texteEstValide(user_name) || !texteEstValide(name) || !texteEstValide(surname)) {
        return res.status(400).json({ error: "Nom, prénom ou username invalide" });
    }
    if (!courrielEstValide(email)) {
        return res.status(400).json({ error: "Email invalide" });
    }
    if (!motDePasseEstvalide(password)) {
        return res.status(400).json({ error: "Mot de passe invalide" });
    }
    if (!telEstValide(phone)) {
        return res.status(400).json({ error: "Téléphone invalide" });
    }

    try {
        const result = await register(req.body);
        res.status(201).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

//Route Login
router.post("/login", async (req, res) => {
    const { user_name, password } = req.body;

    if (!texteEstValide(user_name) || !motDePasseEstvalide(password)) {
        return res.status(400).json({ error: "Username ou mot de passe invalide" });
    }

    try {
        const result = await login(req.body);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: err.message });
    }
});

export default router;