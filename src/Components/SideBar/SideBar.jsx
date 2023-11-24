import React from "react";
import s from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={s.sidebar__block}>
      <div className={s.price__filter}>
        <div className={s.filter__title}>Price</div>
        <input type="number" placeholder="from" />
        <input type="number" placeholder="to" />
      </div>

      <div className={s.date__filter}>
        <div className={s.filter__title}>Date of publication</div>

        <input type="checkbox" id="2023" name="2023" />
        <label for="2023">2023</label>
        <br />

        <input type="checkbox" id="2022" name="2022" />
        <label for="2022">2023</label>
        <br />

        <input type="checkbox" id="2021" name="2021" />
        <label for="2021">2021</label>
        <br />

        <input type="checkbox" id="2020" name="2020" />
        <label for="2020">2020 and later</label>
        <br />
      </div>

      <div className={s.genres__filter}>
        <div className={s.filter__title}>Genres</div>

        <input type="checkbox" id="2023" name="fiction" />
        <label for="fiction">fiction</label>
        <br />

        <input type="checkbox" id="detective" name="detective" />
        <label for="detective">detective</label>
        <br />

        <input type="checkbox" id="fantasy" name="fantasy" />
        <label for="fantasy">fantasy</label>
        <br />

        <input type="checkbox" id="short stories" name="short stories" />
        <label for="short stories">short stories</label>
        <br />

        <input type="checkbox" id="sci-fi" name="sci-fi" />
        <label for="sci-fi">sci-fi</label>
        <br />

        <input type="checkbox" id="classic" name="classic" />
        <label for="classic">classic</label>
        <br />
      </div>

      <div className={s.age__filter}>
        <div className={s.filter__title}>Age restrictions</div>
        <input type="number" placeholder="age" />
      </div>

      <div className={s.complexity__filter}>
        <div className={s.filter__title}>Complexity</div>

        <input type="checkbox" id="junior" name="junior" />
        <label for="junior">junior</label>
        <br />

        <input type="checkbox" id="middle" name="middle" />
        <label for="middle">middle</label>
        <br />

        <input type="checkbox" id="senior" name="senior" />
        <label for="senior">senior</label>
        <br />
      </div>

      <div className={s.rating__filter}>
        <div className={s.filter__title}>Rating</div>

        
      </div>
      
    </div>
  );
}

export default SideBar;
