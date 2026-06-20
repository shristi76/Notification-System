
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../config/db");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check if email exists
        const user = await db.query(
            "SELECT * FROM users WHERE email=$1",
            [email]
        );

        if (user.rows.length > 0) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        await db.query(
            `INSERT INTO users(name,email,password)
             VALUES($1,$2,$3)`,
            [name, email, hashedPassword]
        );

        res.status(201).json({
            message: "User registered successfully"
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });
    }
};


const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required"
            });
        }

        // Find user
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = result.rows[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.json({
            message: "Login successful",
            token
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }
};

module.exports = {
    register,login
};