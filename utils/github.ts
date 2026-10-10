import { Basics } from "types";
import { basics as defaultBasics } from "info/basics";

export async function fetchGithubBasics(): Promise<Basics[]> {
  try {
    const headers: Record<string, string> = {
      "User-Agent": "j3ksa-portfolio",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch("https://api.github.com/users/j3ksa", { headers }),
      fetch(
        "https://api.github.com/users/j3ksa/repos?per_page=100&sort=updated",
        { headers }
      ),
    ]);

    if (!userRes.ok && !reposRes.ok) {
      return defaultBasics;
    }

    const user = userRes.ok ? await userRes.json() : {};
    const reposRaw = reposRes.ok ? await reposRes.json() : [];
    const repos = Array.isArray(reposRaw) ? reposRaw : [];

    // Calculate years from first project or account creation
    const createdDate = user.created_at
      ? new Date(user.created_at)
      : new Date("2020-10-01");
    const diffYears = Math.max(
      1,
      Math.floor(
        (Date.now() - createdDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
      )
    );

    // Languages and game projects count
    const languages = new Set<string>();
    let gameCount = 0;
    for (const r of repos) {
      if (r.language) languages.add(r.language);
      const name = (r.name || "").toLowerCase();
      const desc = (r.description || "").toLowerCase();
      if (
        name.includes("game") ||
        desc.includes("game") ||
        name.includes("beergeon") ||
        name.includes("maze") ||
        name.includes("unity")
      ) {
        gameCount++;
      }
    }

    const totalRepos =
      user.public_repos ?? (repos.length > 0 ? repos.length : 19);

    return [
      {
        id: "experience",
        value: `${diffYears}+`,
        description: "Years building on GitHub",
      },
      {
        id: "projects",
        value: `${totalRepos}`,
        description: "Public repositories",
      },
      {
        id: "languages",
        value: `${languages.size > 0 ? `${languages.size}+` : "4+"}`,
        description: "Core languages & tech used",
      },
      {
        id: "focus",
        value: "C#",
        description: "Game development focus",
      },
      {
        id: "games",
        value: `${gameCount > 0 ? `${gameCount}+` : "4+"}`,
        description: "Games & interactive projects",
      },
      {
        id: "effort",
        value: "100%",
        description: "Dedication to game systems",
      },
    ];
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return defaultBasics;
  }
}
