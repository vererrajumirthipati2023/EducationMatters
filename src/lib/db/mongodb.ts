
import { MongoClient, Db, ObjectId } from "mongodb";

// The system DNS resolver on this machine is refusing MongoDB SRV lookups.
// Use public DNS servers that have been verified to resolve the Atlas SRV record.


const uri = process.env.MONGODB_URI || "";
const dbName = process.env.MONGODB_DB || "education_matters";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }

    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}

let isIndexInitialized = false;

export async function getDatabase(): Promise<Db> {
  const clientInstance = await getMongoClient();
  const db = clientInstance.db(dbName);

  if (!isIndexInitialized) {
    try {
      await db.collection("users").createIndex(
        { email: 1 },
        { unique: true }
      );

      isIndexInitialized = true;
    } catch (err) {
      console.warn("Index initialization notice:", err);
    }
  }

  return db;
}

export interface UserDocument {
  _id?: ObjectId;
  email: string;
  passwordHash: string;
  referralSource: string;
  referralSourceOther?: string | null;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt: Date;
}