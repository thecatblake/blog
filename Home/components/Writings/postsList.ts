type Post = {
  id: number;
  datetime: string;
  link: string;
  title: string;
};

export const postsList: Post[] = [
  {
    datetime: '2021-01-02',
    link: '/bookshelf/the-effective-engineer',
    title: 'The Effective Engineer',
  }
].map((post, id) => ({ id, ...post }));
