import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const feedback = await db.collection("feedback").find({}).toArray();
    res.status(200).json({ feedback: feedback });
  } catch (error) {
    res.status(500).json({ message: "Failed to getting feetback." });
  }
}
