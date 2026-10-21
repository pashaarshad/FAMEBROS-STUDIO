import mongoose from 'mongoose';

// Direct production MongoDB Atlas connection string (used as fallback so Vercel never points to localhost:27017)
const DIRECT_MONGODB_URI =
  'mongodb+srv://famebrosstudio_db_user:nUWoi6eeS8eaZXWb@famebrosstudio.u0lv4gm.mongodb.net/famebros-studio?retryWrites=true&w=majority';

function resolveMongoUri(): string {
  const envUri = process.env.MONGODB_URI?.trim();
  // If env var is missing or contains old local port/localhost, use direct Atlas string
  if (!envUri || envUri.includes('localhost') || envUri.includes('127.0.0.1') || envUri.includes('27017')) {
    return DIRECT_MONGODB_URI;
  }
  return envUri;
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose | null> {
  // If already connected and ready, return existing connection
  if (cached.conn && cached.conn.connection.readyState === 1) {
    return cached.conn;
  }

  const uri = resolveMongoUri();

  // If connection is in broken/disconnected state, reset cached promise
  if (cached.conn && cached.conn.connection.readyState !== 1) {
    cached.conn = null;
    cached.promise = null;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
    };

    cached.promise = mongoose.connect(uri, opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    cached.conn = null;
    console.error('Failed to connect to MongoDB:', e);
    return null;
  }

  return cached.conn;
}

export async function isMongoConnected(): Promise<boolean> {
  const conn = await connectToDatabase();
  return conn !== null && conn.connection.readyState === 1;
}
