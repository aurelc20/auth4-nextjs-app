import { hashPassword } from "@/lib/auth";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    return res.status(422).json({
      message: "Invalid input or password must be greater the 5 carachtes",
    });
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    const existUser = await db.collection("users").findOne({ email });

    if (existUser) {
      return res.status(422).json({
        message: "User exists already!",
      });
    }

    const hashedPassword = await hashPassword(password);

    await db.collection("users").insertOne({
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "Created user!" });
  } catch (error) {
    return res.status(500).json({ message: error || "Something went wrong!." });
  }
}
