import React from "react";
import classes from "./ItemList.module.css";
import PictureTesting from "../../assets/pictureTask.png";
import { AiOutlineTags, AiOutlinePushpin } from "react-icons/ai";

const ItemList = () => {
  const items = [
    {
      id: "1",
      name: "File with very long ",
      picture: PictureTesting,
      categories: ["Branding", "Illustrations", "Print"],
    },
    {
      id: "2",

      name: "File with very long name test test etest test test test",
      picture: PictureTesting,
      categories: ["Branding", "Illustrations", "Print"],
    },
    {
      id: "3",

      name: "File with very long name",
      picture: PictureTesting,
      categories: ["Branding", "Illustrations", "Print"],
    },
    {
      id: "4",

      name: "File with very long name",
      picture: PictureTesting,
      categories: ["Branding", "Illustrations", "Print"],
    },
    {
      id: "5",

      name: "File with very long name",
      picture: PictureTesting,
      categories: ["Branding", "Illustrations", "Print"],
    },
    {
      id: "6",

      name: "File with very long name",
      picture: PictureTesting,
      categories: ["Branding", "Illustrations", "Print"],
    },
  ];
  return (
    <div className={classes.container}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ backgroundImage: `url(${item.picture})` }}
          className={classes.imageContainer}
        >
          <div className={classes.itemsDisplay}>
            <div className={classes.topLeftItem}> </div>
            <div className={classes.toprightItem}>
              &#xFE19;
              <div>
                <ul className={classes.topRightShow}>
                  <li className={classes.topRightShowItem}>Option 1</li>
                  <li className={classes.topRightShowItem}>Option 2</li>
                  <li className={classes.topRightShowItem}>Option 3</li>
                </ul>
              </div>
            </div>

            <div className={classes.bottomLeftItem}>{item.name}</div>
            <div className={classes.bottomRightItems}>
              <div className={classes.itemYellow}>
                <span className={classes.iconYellow}>
                  <AiOutlineTags />
                </span>
              </div>
              <div className={classes.itemWhite}>
                <span className={classes.iconWhite}>
                  <AiOutlinePushpin />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
