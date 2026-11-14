import { MENU_SECTIONS, itemsBySection } from "@/lib/menu";
import { MenuCard } from "./MenuCard";

export function Menu() {
  let cardIndex = 0;

  return (
    <div className="menu">
      {MENU_SECTIONS.map((section) => {
        const items = itemsBySection(section.id);
        return (
          <section key={section.id} className="menu-section" aria-labelledby={`section-${section.id}`}>
            <h2 id={`section-${section.id}`} className="section-heading">
              {section.title}
              <span className="section-slash" aria-hidden />
            </h2>
            <ul className="menu-list">
              {items.map((item) => {
                const idx = cardIndex;
                cardIndex += 1;
                return (
                  <li key={item.id}>
                    <MenuCard item={item} index={idx} imagePriority={idx < 2} />
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}