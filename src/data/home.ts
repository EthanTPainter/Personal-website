export type HomeDataType = (baseUrl: String) => {
  header: String;
  subHeader: String;
  link: String;
}[];

export const HomeData: HomeDataType = (baseUrl: String) => [
  {
    header: "Hello, I am Ethan!",
    subHeader: "I'm a Full Stack & Cloud Web Developer currently working @ Capital One in Richmond, VA",
    link: baseUrl,
  },
  {
    header: "Passions",
    subHeader: "A short list of things I'm passionate about",
    link: `${baseUrl}/passions`,
  },
  {
    header: "Sick Skills!",
    subHeader: "Some skills I've acquired and technologies I've worked with over the past years",
    link: `${baseUrl}/skills`
  },
  {
    header: "Work",
    subHeader: "A short list of projects and work I have been a part of",
    link: `${baseUrl}/work`,
  },
  {
    header: "Connect",
    subHeader: "Have an idea for an interesting app or want to chat? Let me know!",
    link: `${baseUrl}/connect`,
  },
];
