import Header from "./components/Header";
import CardDisplay from "./components/CardDisplay";

export default function App() {
  return (
    <main className="container">
      <Header />

      <article className="text-center">
        <h3 className="portfolioH3">Portfolio</h3>
        <p className="portfolioP">A full stack of programs front to back.</p>
      </article>
      <CardDisplay />
      <article className="row">
        <div>
          <img
            className="photo"
            src="assets/piano-BW-self.jpg"
            alt="self portrait"
          />
        </div>
        <h3 className="portfolioH3"> About Me</h3>
        <p className="portfolioP">
          <b>Creation is what drives me.</b> <br />I started my career as a
          journalist and for nearly a decade, I traveled to different
          communities learning about life and sharing peoples stories. I
          continued that thread as I moved into advertising and directed a
          weekly webseries about local history.
        </p>
        <p className="portfolioP">
          After sharing the stories of others for years, I decided it was time
          to write my own next chapter. <b>Which brings us here.</b>
        </p>
        <p className="portfolioP">
          I started my coding journey in the summer of 2021 and after 6 months
          of intensive study at in the Unversity of Texas San Antonio Web
          Development Bootcamp. I'm starting fresh, <b>hoping to</b> use my
          newly developed skills to <b>create something new.</b>
        </p>
      </article>
    </main>
  );
}
