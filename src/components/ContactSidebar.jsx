import React from "react";

export default function ContactSidebar() {
  const icons = [
    { src: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png", active: true }, // home
    { src: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png" }, // user
    { src: "https://cdn-icons-png.flaticon.com/512/906/906334.png" }, // briefcase
    { src: "https://cdn-icons-png.flaticon.com/512/1828/1828925.png" }, // flowchart
    { src: "https://cdn-icons-png.flaticon.com/512/561/561127.png" }, // mail
  ];

  return (
    <div>
      <style>{`
        .sidebar {
            width: 70px;
            padding: 20px 0;
            background: #0b2c0b;
            border-radius: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
        }

        .sidebar-wrapper {
            height: 100vh;
            background: #001a00;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s ease;
        }

        .icon img {
            width: 26px;
            height: 26px;
            filter: brightness(0) invert(1);
        }

        .icon.active {
            background: #2ca045;
        }

        .icon:hover {
            transform: scale(1.12);
        }
      `}</style>

      <div className="sidebar-wrapper">
        <div className="sidebar">
          {icons.map((item, index) => (
            <div
              key={index}
              className={`icon ${item.active ? "active" : ""}`}
            >
              <img src={item.src} alt="icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
