import { useState } from "react";
import "./App.css";

const menuGroups = [0, 1];
const menuItems = [0, 1, 2, 3];
const fabActions = ["I'm First", "I'm Second", "I'm Third"];

function MenuPanel({ group }: { group: number }) {
  return (
    <div
      className={`menu-panel menu-panel-${group + 1}`}
      role="group"
      aria-label={`Menu group ${group + 1}`}
    >
      {menuItems.map((item) => (
        <button className="menu-item" key={item} type="button">
          <span className="menu-item-icon" aria-hidden="true">
            ★
          </span>
          <span>Label</span>
          <span className="menu-chevron" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

function App() {
  const [isFabMenuOpen, setIsFabMenuOpen] = useState(true);

  return (
    <main className="showcase">
      <div className="stage-frame">
        <div className="stage">

        
          {/* Stacked card */}
          <article className="stacked-card">
            <header className="card-header">
              <span className="avatar" aria-hidden="true">
                A
              </span>
              <div className="card-heading">
                <span>Header</span>
                <span>Subhead</span>
              </div>
              <button
                className="overflow-button"
                type="button"
                aria-label="More card options"
              >
                <span />
                <span />
                <span />
              </button>
            </header>
            <div className="card-media" aria-hidden="true">
              <div className="placeholder-shapes">
                <span className="shape-triangle" />
                <span className="shape-burst" />
                <span className="shape-square" />
              </div>
            </div>
            <div className="card-content">
              <div className="card-title">Title</div>
              <div className="card-subtitle">Subtitle</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <div className="card-actions">
                <button className="button button-secondary" type="button">
                  Secondary
                </button>
                <button className="button button-primary" type="button">
                  Primary
                </button>
              </div>
            </div>
          </article>

          {/* Menu */}
          <div className="menu-stack" aria-label="Menu examples">
            {menuGroups.map((group) => (
              <MenuPanel group={group} key={group} />
            ))}
          </div>

          {/* Fab Button */}
          <div className="fab-menu">
            {isFabMenuOpen && (
              <div className="fab-actions" aria-label="Quick actions">
                {fabActions.map((action) => (
                  <button
                    className={`fab-action fab-action-${action.toLowerCase()}`}
                    key={action}
                    type="button"
                  >
                    <span className="fab-action-icon" aria-hidden="true">
                      ★
                    </span>
                    {action}
                  </button>
                ))}
              </div>
            )}
            <button
              className={`fab-toggle${isFabMenuOpen ? " is-open" : ""}`}
              type="button"
              aria-label={
                isFabMenuOpen ? "Close quick actions" : "Open quick actions"
              }
              aria-expanded={isFabMenuOpen}
              onClick={() => setIsFabMenuOpen((open) => !open)}
            >
              {isFabMenuOpen ? (
                <span className="close-icon" aria-hidden="true">
                  ×
                </span>
              ) : (
                <span aria-hidden="true">+</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
