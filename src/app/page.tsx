import SocialCard from "@/components/SocialCard";
import axios from "axios";

export default async function Home() {
  try {
    const youtubeResponse = await axios.get(
      "https://b3-metrics.up.railway.app/youtube/birobirobiro"
    );
    console.log(youtubeResponse);

    const twitchResponse = await axios.get(
      "https://b3-metrics.up.railway.app/twitch/54417359"
    );
    console.log(twitchResponse);

    const discordResponse = await axios.get(
      "https://b3-metrics.up.railway.app/discord/1075597146214109325"
    );
    console.log(discordResponse);

    const githubResponse = await axios.get(
      "https://b3-metrics.up.railway.app/github/birobirobiro"
    );
    console.log(githubResponse);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <SocialCard />
    </main>
  );
}
