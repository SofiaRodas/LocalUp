import "../../styles/dashboard/topbar.css";

function Topbar() {

  return (

    <div className="topbar">

      <input
        type="text"
        placeholder="Buscar lugares o eventos..."
      />

      <div className="topbar-user">

        <img
          src="https://i.pravatar.cc/150?img=32"
          alt=""
        />

        <span>Sofía</span>

      </div>

    </div>
  );
}

export default Topbar;