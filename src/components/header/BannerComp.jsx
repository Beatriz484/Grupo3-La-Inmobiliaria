import './BannerComp.css';

function BannerComp() {
  return (
    <section className="banner">
      <div className="bannerContent">
        <span className="bannerBadge">
          PISOS COMPARTIDOS PARA ESTUDIANTES EN MADRID
        </span>

        <h1 className="bannerTitle">
          Encuentra tu nuevo hogar{' '}
          <span className="bannerTitleHighlight">
            universitario en Madrid.
          </span>
        </h1>

        <div className="bannerSearch">
          <svg
            className="bannerSearchIcon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Encuentra tu habitación compartida en Madrid (Barrio/Universidad)"
            className="bannerSearchInput"
          />
          <button className="bannerSearchButton">Buscar</button>
        </div>
      </div>
    </section>
  );
}

export default BannerComp;