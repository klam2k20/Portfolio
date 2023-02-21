import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ub83se4o",
  dataset: "production",
  useCdn: false,
  apiVersion: "2022-02-01",
  token:
    "skEbj54H35aFLPBBZ0QKVBsiO9wHRWQke8HMaCjqclSFL9NlXPGsQD6xUECUd00IBak6CnA2BmmOYC5dHG0GiC3cznAk84tfSmZiwcis0P1Cy88GhwukuW2oG9BmIUohVAZfqgOCxSYa8oxBSjHQsiQyHWG6N1eWYtOdbfyo9R74Pzvleppo",
});

const builder = imageUrlBuilder(client);

export const imageFor = (source) => builder.image(source);
