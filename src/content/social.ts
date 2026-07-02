export const social = [
  { url: "mailto:layna4115@gmail.com", name: "mail" },
  { url: "https://github.com/layna411", name: "github" },
  { url: "https://www.linkedin.com/in/laynas/", name: "linkedin" },
  { url: "https://www.instagram.com/yours_layn22/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
