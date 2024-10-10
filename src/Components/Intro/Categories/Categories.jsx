import React, { useState } from "react";
import s from "./Categories.module.scss";
import MenuBurger from "../../MenuBurger/MenuBurger";
import Category from "./Category/Category";


//icons
import ScienceIcon from "../../../images/Categories/science.png";
import ProgrammingIcon from "../../../images/Categories/programming.png";
import BusinessIcon from "../../../images/Categories/business.png";
import ArtIcon from "../../../images/Categories/design.png";
import LanguagesIcon from "../../../images/Categories/languages.png";
import LawIcon from "../../../images/Categories/law.png";


function Categories() {
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(true);

  return (
    <div className={s.categories__block}>
      <div className={s.categories__title__wrapper}>
        <div className={s.menu__burger__wrapper}>
          {
            isCategoriesMenuOpen ?
              <MenuBurger isWhite={true} onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)} />
              :
              <div className={s.hide__menu} onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)}>X</div>
          }
        </div>
        <span>Categories</span>
      </div>

      {isCategoriesMenuOpen ?
        <div className={s.categories__wrapper}>
          <Category title={"Science"} icon={ScienceIcon} />
          <Category title={"Programming"} icon={ProgrammingIcon} />
          <Category title={"Business"} icon={BusinessIcon} />
          <Category title={"Design and Art"} icon={ArtIcon} />
          <Category title={"Languages"} icon={LanguagesIcon} />
          <Category title={"Law"} icon={LawIcon} />
        </div>
        :
        <div></div>
      }

    </div>
  );
}

export default Categories;
