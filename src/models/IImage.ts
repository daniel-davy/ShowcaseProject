export interface IImage {
  id: string;
  description: string | null;
  user: {
    name: string;
  };
  urls: {
    regular: string;
  };
}