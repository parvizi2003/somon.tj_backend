import PostModel from "../models/Post"
import UserModel from "../models/User"

export async function up(db, client) {
  await db.createCollection('users', UserModel)
  await db.createCollection('posts', PostModel)
};
  
export async function down(db, client) {
  await db.collection('users').drop()
  await db.collection('posts').drop()
};
