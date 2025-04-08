import { db } from "@/server/db";

export const QUERIES = {
  getAllTweets() {
    return db.query.tweetsTable.findMany({
      with: { user: true },
      orderBy: (tweetsTable, { desc }) => desc(tweetsTable.createdAt),
    });
  },
};
