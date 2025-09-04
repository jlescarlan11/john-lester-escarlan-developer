interface CardInterface {
  subInfo: string;
  mainInfo: string;
  descriptions: string[];
  image: string;
  skills: string[];
  duration: string;
  links?: Record<string, string | undefined>; // Allow undefined values
}

export default CardInterface;
